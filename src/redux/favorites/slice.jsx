import { createSlice, createAction } from '@reduxjs/toolkit';

export const addFavorite = createAction('favorites/addFavorites');

export const deleteFavorite = createAction('favorites/deleteFavorites');

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { items: [] },
  extraReducers: builder => {
    builder
      .addCase(addFavorite, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteFavorite, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
