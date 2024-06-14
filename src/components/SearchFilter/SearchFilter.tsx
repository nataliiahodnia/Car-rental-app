import React, { useState, useEffect } from 'react';
import Autosuggest, { SuggestionsFetchRequestedParams, ChangeEvent } from 'react-autosuggest';
import { useDispatch, useSelector } from 'react-redux';
import { Advert, fetchAdverts, selectAllAdverts } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store';
import makes from '../../data/makes.json'; 
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from '@reduxjs/toolkit';
import styles from './SearchFilter.module.css';

interface Props {
  onFilter: (filteredAdverts: Advert[]) => void;
}

const SearchFilter: React.FC<Props> = ({ onFilter }) => {
    const dispatch = useDispatch<ThunkDispatch<RootState, null, Action<string>>>();
    const [value, setValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const allAdverts = useSelector((state: RootState) => selectAllAdverts(state));

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    useEffect(() => {
        let filteredAdverts = allAdverts;

        if (value !== '') {
            filteredAdverts = filteredAdverts.filter(advert => advert.make === value);
        }

        onFilter(filteredAdverts);
    }, [value, allAdverts, onFilter]);

    const allMakes = makes.map(make => make.toLowerCase());

    const getSuggestions = (inputValue: string) => {
        const inputLength = inputValue.length;
        const inputValueLower = inputValue.toLowerCase();

        return inputLength === 0 ? allMakes : allMakes.filter(make =>
            make.includes(inputValueLower)
        );
    };

    const onSuggestionsFetchRequested = ({ value }: SuggestionsFetchRequestedParams) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const getSuggestionValue = (suggestion: string) => suggestion;

    const renderSuggestion = (suggestion: string) => (
        <div className={styles.suggestion}>
            {suggestion}
        </div>
    );


    const inputProps: Autosuggest.InputProps<string> = {
        placeholder: 'Choose a car',
        value,
        onChange: (_: React.FormEvent<unknown>, { newValue }: ChangeEvent) => {
            setValue(newValue);
        }
    };

    return (
        <div className={styles.filters}>
            <form className={styles.form}>
                <div className={styles.dropdown}>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        theme={{
                            container: styles.container,
                            input: styles.input,
                            suggestionsContainer: styles.suggestionsContainer,
                            suggestion: styles.suggestion,
                            suggestionHighlighted: styles.suggestionHighlighted
                        }}
                    />
                </div>
                <select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={styles.select}
                >
                    <option value="">All Makes</option>
                    {makes.map((make, index) => (
                        <option key={index} value={make}>
                            {make}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default SearchFilter;
