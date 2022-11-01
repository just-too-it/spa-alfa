import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/books.slice';
import favoriteBooksSlice from './favoriteBooks/favoriteBooks.slice';

export const store = configureStore({
  reducer: {
    books: booksSlice,
    favoriteBooks: favoriteBooksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
