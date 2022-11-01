import React, { useEffect, useState } from 'react';
import { BookList } from 'components/BookList';
import styles from './Home.module.scss';
import { fetchBooks } from 'store/books/books.slice';

import { useAppDispatch, useAppSelector } from 'store/store.hooks';
import { STATUS } from 'core/constants/status';
import { selectBooks } from 'store/books/books.selectors';
import { selectFavoriteBooks } from 'store/favoriteBooks/favoriteBooks.selectors';
import clsx from 'clsx';

export const Home = () => {
  const dispatch = useAppDispatch();
  const [showFavoriteBooks, setShowFavoriteBooks] = useState(false);
  const { books, status } = useAppSelector(selectBooks);
  const favoriteBooks = useAppSelector(selectFavoriteBooks);

  const handleChangeBooks = () => {
    setShowFavoriteBooks((showFavorite) => !showFavorite);
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <main className={clsx('container', styles.home)}>
      <h1 className={styles.title}>Подборка книг про Шерлока Холмса из Google Books</h1>
      {status === STATUS.LOADING && 'Загрузка данных'}
      {status === STATUS.ERROR && 'Ошибка при запросе данных'}
      {status === STATUS.SUCCESS && (
        <>
          <button className={styles.button} onClick={handleChangeBooks}>
            {showFavoriteBooks ? 'Показать все' : 'Показать избранное'}
          </button>
          <h2 className={styles.title}>{showFavoriteBooks ? 'Избранные книги' : 'Все книги'}</h2>
          {showFavoriteBooks ? <BookList books={favoriteBooks} /> : <BookList books={books} />}
        </>
      )}
    </main>
  );
};
