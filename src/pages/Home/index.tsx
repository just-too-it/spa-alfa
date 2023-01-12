import React, { useEffect } from 'react';
import clsx from 'clsx';

import { BookList } from 'components/BookList';
import { fetchBooks } from 'store/books/books.slice';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';
import { STATUS } from 'core/constants/status';
import { Loader } from 'components/Loader';
import { showFavoriteBooks } from 'store/favoriteBooks/favoriteBooks.slice';

import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { books, status } = useAppSelector((state) => state.books);
  const { favoriteBooks, showFavorites } = useAppSelector((state) => state.favoriteBooks);

  const handleChangeBooks = () => {
    dispatch(showFavoriteBooks(!showFavorites));
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
            {showFavorites ? 'Показать все' : 'Показать избранное'}
          </button>
          <h2 className={styles.title}>
            {showFavorites ? `Избранные книги: ${favoriteBooks.length} шт.` : 'Все книги'}
          </h2>
          {showFavorites ? <BookList books={favoriteBooks} /> : <BookList books={books} />}
        </>
      )}
    </main>
  );
};
