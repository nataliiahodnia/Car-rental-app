import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Advert, fetchAdverts, selectAllAdverts } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store';
import makes from '../../data/makes.json'; 
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from '@reduxjs/toolkit';
import CarList from '../CarList/CarList'; 

const SearchFilter: React.FC = () => {
    const dispatch = useDispatch<ThunkDispatch<RootState, null, Action<string>>>();
    const [selectedMake, setSelectedMake] = useState<string>('all');
    const [searchTerm] = useState<string>('');
    const [filteredAdverts, setFilteredAdverts] = useState<Advert[]>([]);
    const allAdverts = useSelector((state: RootState) => selectAllAdverts(state));

    useEffect(() => {
        let filtered = allAdverts;

        if (selectedMake !== 'all') {
            filtered = filtered.filter(advert => advert.make === selectedMake);
        }

        if (searchTerm.trim() !== '') {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(advert =>
                advert.make.toLowerCase().includes(term) ||
                advert.model.toLowerCase().includes(term) ||
                advert.type.toLowerCase().includes(term) ||
                advert.rentalCompany.toLowerCase().includes(term) ||
                advert.description.toLowerCase().includes(term)
            );
        }

        setFilteredAdverts(filtered);
    }, [selectedMake, searchTerm, allAdverts]);

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchAdverts());
    };

    const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMake(e.target.value);
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
  
          <CarList filteredAdverts={filteredAdverts} adverts={[]} /> 
      </div>
  );
  
};

export default SearchFilter;
