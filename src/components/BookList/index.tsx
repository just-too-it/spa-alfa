import React, { FC } from 'react';

import { Book } from 'components/Book';
import { BookListProps } from './BookListProps.types';

import styles from './BookList.module.scss';

export const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <ul className={styles.books}>
      {books.map((book) => (
        <li key={book.id} className={styles.item}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  );
};
