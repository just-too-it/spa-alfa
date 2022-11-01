import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { BookList } from 'components/BookList';
import { fetchBooks } from 'store/books/books.slice';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';
import { STATUS } from 'core/constants/status';
import { selectBooks } from 'store/books/books.selectors';
import { selectFavoriteBooks } from 'store/favoriteBooks/favoriteBooks.selectors';
import { Loader } from 'components/Loader';

import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useAppDispatch();
  const [showFavoriteBooks, setShowFavoriteBooks] = useState(false);
  const { books, status } = useAppSelector(selectBooks);
  const { favoriteBooks } = useAppSelector(selectFavoriteBooks);

  const handleChangeBooks = () => {
    setShowFavoriteBooks((showFavoriteBooks) => !showFavoriteBooks);
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <main className={clsx('container', styles.home)}>
      <h1 className={styles.title}>Подборка книг про Шерлока Холмса из Google Books</h1>
      {status === STATUS.LOADING && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {status === STATUS.ERROR && <div className={styles.message}>Ошибка при запросе данных с сервера</div>}
      {status === STATUS.SUCCESS && (
        <>
          <button className={styles.button} onClick={handleChangeBooks}>
            {showFavoriteBooks ? 'Показать все' : 'Показать избранное'}
          </button>
          <h2 className={styles.title}>
            {showFavoriteBooks ? `Избранные книги: ${favoriteBooks.length} шт.` : 'Все книги'}
          </h2>
          {showFavoriteBooks ? <BookList books={favoriteBooks} /> : <BookList books={books} />}
        </>
      )}
    </main>
  );
};
