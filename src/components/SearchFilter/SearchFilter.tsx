import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Advert, fetchAdverts, selectAllAdverts } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store';
import makes from '../../data/makes.json'; // Імпорт списку марок автомобілів
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from '@reduxjs/toolkit';

import CarList from '../CarList/CarList';

const SearchFilter: React.FC = () => {
    const dispatch = useDispatch<ThunkDispatch<RootState, null, Action<string>>>();
    const [selectedMake, setSelectedMake] = useState<string>('all');
    const [filteredAdverts, setFilteredAdverts] = useState<Advert[]>([]);
    const allAdverts = useSelector((state: RootState) => selectAllAdverts(state));
    const pageSize = 12; // Кількість оголошень на одній сторінці
    const [currentPage, setCurrentPage] = useState(1); // Поточна сторінка

    useEffect(() => {
        if (selectedMake === 'all') {
            setFilteredAdverts(allAdverts);
        } else {
            setFilteredAdverts(allAdverts.filter(advert => advert.make === selectedMake));
        }
    }, [selectedMake, allAdverts]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        setFilteredAdverts(allAdverts.slice(startIndex, endIndex));
    }, [currentPage, allAdverts, pageSize]);

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchAdverts());
    };

    const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMake(e.target.value);
        setCurrentPage(1); // При зміні вибраної марки переходимо на першу сторінку
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredAdverts.length / pageSize)));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <select value={selectedMake} onChange={handleMakeChange}>
                    <option value="all">All</option>
                    {makes.map((make: string) => (
                        <option key={make} value={make}>{make}</option>
                    ))}
                </select>
                <button type="submit">Search</button>
            </form>

            <CarList filteredAdverts={filteredAdverts} pageSize={pageSize} /> {/* Передаємо відфільтровані оголошення в CarList */}
            
            {filteredAdverts.length > pageSize && (
                <div>
                    <button disabled={currentPage === 1} onClick={handlePrevPage}>
                        Previous
                    </button>
                    <span>Page {currentPage}</span>
                    <button disabled={currentPage === Math.ceil(filteredAdverts.length / pageSize)} onClick={handleNextPage}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchFilter;
