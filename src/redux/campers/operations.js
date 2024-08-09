import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66192d2e9a41b1b3dfbf2053.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (limit = 4, thunkAPI) => {
    try {
      const response = await axios.get('/Adverts', {
        params: {
          page: thunkAPI.getState().campers.page,
          limit,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  }
);
