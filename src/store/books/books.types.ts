import { BookProps } from 'components/Book/Book.types';
import { STATUS } from 'core/constants/status';

export type BooksState = {
  books: BookProps[];
  status: STATUS;
  error: string;
};
