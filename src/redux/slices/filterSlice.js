import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    author: '',
    onlyFavorite: false,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            state.title = action.payload;
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },
        setOnlyFavorite: (state, action) => {
            state.onlyFavorite = !state.onlyFavorite;
        },
        setResetFilters: () => {
            return initialState;
        },
    },
});
export const {
    setTitleFilter,
    setAuthorFilter,
    setOnlyFavorite,
    setResetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavorite = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;
