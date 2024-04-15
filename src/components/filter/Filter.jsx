

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeFilter, selectNameFilter } from '../../redux/filtersSlice';
import s from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = e => {
        dispatch(handleChangeFilter(e.target.value));
    };

    return (
        <div className={s.filter}>
            <label htmlFor="filter">Filter contacts by name:</label>
            <input
                type="text"
                id="filter"
                name="filter"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Enter name to filter"
            />
        </div>
    );
};

export default Filter;
