import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { BookProps } from 'components/Book/Book.types';
import { STATUS } from 'core/constants/status';
import { BooksState } from './books.types';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  const QUERY = 'sherlock';

  try {
    const response = await axios.get(`${process.env.REACT_APP_API}?key=${process.env.REACT_APP_API_KEY}&q=${QUERY}`);
    return response.data.items as BookProps[];
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const initialState: BooksState = {
  books: [],
  status: STATUS.LOADING,
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<BookProps[]>) => {
      state.books = action.payload;
      state.status = STATUS.SUCCESS;
    });
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.books = [];
      state.status = STATUS.ERROR;
    });
  },
});

export const { deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
