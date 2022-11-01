import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BookProps } from 'components/Book/Book.types';
import axios from 'axios';
import { STATUS } from 'core/constants/status';
import { BooksState } from './books.types';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {

    try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?key=${process.env.REACT_APP_API_KEY}&q=sherlock`);
          return response.data.items as BookProps[];
      } catch (error) {
        return rejectWithValue((error as Error).message);
      }

//   const response = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?key=${process.env.REACT_APP_API_KEY}&q=sherlock`
//   );
//   // Inferred return type: Promise<MyData>
//   if (response.status === 400) {
//     // Return the known error for future handling
//     return rejectWithValue((await response.json()));
//   }
//   const data = await response.json()
//   return data.items as BookProps[]

  //return (await response.json()) as BookProps[];
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
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<BookProps[]>) => {
        state.books = action.payload;
        state.status = STATUS.SUCCESS;
      });
    builder.addCase(fetchBooks.pending, (state) => {
        state.status = STATUS.LOADING;
      });
    builder.addCase(fetchBooks.rejected, (state, action: PayloadAction<any>) => {
        state.books = [];
        state.status = STATUS.ERROR;
        state.error = action.payload;
      });
  },
});


export default booksSlice.reducer;
