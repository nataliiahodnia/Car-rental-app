import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Advert, fetchAdverts, selectAllAdverts } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store';
import makes from '../../data/makes.json'; // Імпорт списку марок автомобілів
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from '@reduxjs/toolkit';

interface Props {
  onFilter: (filteredAdverts: Advert[]) => void;
}

const SearchFilter: React.FC<Props> = ({ onFilter }) => {
    const dispatch = useDispatch<ThunkDispatch<RootState, null, Action<string>>>();
    const [selectedMake, setSelectedMake] = useState<string>('all');
    const allAdverts = useSelector((state: RootState) => selectAllAdverts(state));

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    useEffect(() => {
        if (selectedMake === 'all') {
            onFilter(allAdverts);
        } else {
            onFilter(allAdverts.filter(advert => advert.make === selectedMake));
        }
    }, [selectedMake, allAdverts, onFilter]);

    const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMake(e.target.value);
    };

    return (
        <div>
            <form>
                <select value={selectedMake} onChange={handleMakeChange}>
                    <option value="all">All</option>
                    {makes.map((make: string) => (
                        <option key={make} value={make}>{make}</option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default SearchFilter;
