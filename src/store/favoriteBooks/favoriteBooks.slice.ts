import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { BookProps } from 'components/Book/Book.types';
import { FavoriteBooksState } from './favoriteBooks.types';

const initialState: FavoriteBooksState = {
  favoriteBooks: [],
};

export const favoriteBooksSlice = createSlice({
  name: 'favoriteBooks',
  initialState,
  reducers: {
    addFavoriteBook: (state, action: PayloadAction<BookProps>) => {
      state.favoriteBooks = [...state.favoriteBooks, action.payload];
    },
    deleteFavoriteBook: (state, action: PayloadAction<string>) => {
      state.favoriteBooks = state.favoriteBooks.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addFavoriteBook, deleteFavoriteBook } = favoriteBooksSlice.actions;
export default favoriteBooksSlice.reducer;
