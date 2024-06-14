import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Advert, fetchAdverts, selectAllAdverts } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store';
import makes from '../../data/makes.json'; 
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from '@reduxjs/toolkit';
import axios from 'axios'; // Додано імпорт Axios
import styles from "./SearchFilter.module.css";
import dropdownStyles from "./Dropdown.module.css"; // Імпорт стилів для випадаючого вікна

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
        let filteredAdverts = allAdverts;

        if (selectedMake !== 'all') {
            filteredAdverts = filteredAdverts.filter(advert => advert.make === selectedMake);
        }

        onFilter(filteredAdverts);
    }, [selectedMake, allAdverts, onFilter]);

    const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMake(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/adverts');
                const fetchedAdverts: Advert[] = response.data;
                onFilter(fetchedAdverts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [onFilter]);

    return (
        <div className={styles.filters}>
            <form>
                <div className={dropdownStyles.dropdown}>
                    <select className={styles.select} value={selectedMake} onChange={handleMakeChange}>
                        <option value="all">Сhoose a car</option>
                        {makes.map((make: string, index: number) => ( // Додано унікальний ключ
                            <option key={index} value={make}>{make}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
};

export default SearchFilter;
