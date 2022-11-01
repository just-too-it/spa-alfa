import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BookProps } from 'components/Book/Book.types';
import { FavoriteBooksState } from './favoriteBooks.types';

const initialState: FavoriteBooksState = {
  books: [],
};

export const favoriteBooksSlice = createSlice({
  name: 'favoriteBooks',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookProps>) => {
      state.books = [...state.books, action.payload];
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = favoriteBooksSlice.actions;
export default favoriteBooksSlice.reducer;
