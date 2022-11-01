import React, { useEffect } from 'react';
import { BookList } from 'components/BookList';
import styles from './Home.module.scss';
import { fetchBooks } from 'store/books/booksSlice';

import { useAppDispatch, useAppSelector } from 'store/store.hooks';
import { STATUS } from 'core/constants/status';

export const Home = () => {
  const { data, status } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <main className={'container'}>
      <h1 className={styles.title}>Список книг из Google Books</h1>
      {
        status === STATUS.LOADING && 'Загрузка данных'
      }
      {
        status === STATUS.ERROR && 'Ошибка при запросе данных'
      }
      <BookList books={data} />
    </main>
  );
};
