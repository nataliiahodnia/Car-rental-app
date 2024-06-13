import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Advert, fetchAdverts, selectAllAdverts } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store';
import makes from '../../data/makes.json'; 
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from '@reduxjs/toolkit';
import axios from 'axios'; // Додано імпорт Axios

interface Props {
  onFilter: (filteredAdverts: Advert[]) => void;
}

const SearchFilter: React.FC<Props> = ({ onFilter }) => {
    const dispatch = useDispatch<ThunkDispatch<RootState, null, Action<string>>>();
    const [selectedMake, setSelectedMake] = useState<string>('all');
    const [minPrice, setMinPrice] = useState<number | null>(null); // Змінено тип та значення за замовчуванням
    const allAdverts = useSelector((state: RootState) => selectAllAdverts(state));

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    useEffect(() => {
        let filteredAdverts = allAdverts;

        if (selectedMake !== 'all') {
            filteredAdverts = filteredAdverts.filter(advert => advert.make === selectedMake);
        }

        if (minPrice !== null && !isNaN(minPrice)) { // Змінено умову
            filteredAdverts = filteredAdverts.filter(advert => advert.rentalPrice >= minPrice);
        }

        onFilter(filteredAdverts);
    }, [selectedMake, minPrice, allAdverts, onFilter]);

    const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMake(e.target.value);
    };

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMinPrice(e.target.value === '' ? null : parseInt(e.target.value, 10)); // Змінено умову та парсинг
    };

    const generatePriceOptions = (start: number, step: number, count: number) => {
        return Array.from({ length: count }, (_, i) => start + i * step);
    };

    const priceOptions = generatePriceOptions(0, 10, 21);

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
        <div className="filters">
            <form>
                <select value={selectedMake} onChange={handleMakeChange}>
                    <option value="all">All</option>
                    {makes.map((make: string) => (
                        <option key={make} value={make}>{make}</option>
                    ))}
                </select>
                <select value={minPrice === null ? '' : minPrice} onChange={handleMinPriceChange}> {/* Змінено умову */}
                    <option value="">Min Price</option>
                    {priceOptions.map((price) => (
                        <option key={price} value={price}>
                            ${price}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default SearchFilter;
