import { createAction, createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const setItemById = createAction('campers/setItemById');

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 1,
    totalPage: false,
    itemById: null,
  },
  extraReducers: builder => {
    builder
      .addCase(setItemById, (state, action) => {
        state.itemById = action.payload;
      })
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.concat(action.payload);
        state.page = state.page + 1;
        state.totalPage = action.payload.length < 4;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
