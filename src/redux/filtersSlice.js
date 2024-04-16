
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: ""
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        handleChangeFilter: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { handleChangeFilter, setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;