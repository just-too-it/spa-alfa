import React, { FC, useState } from 'react';
import { BookProps } from './Book.types';
import clsx from 'clsx';

import styles from './Book.module.scss';
import { DeleteIcon, LikeIcon } from 'components/icons';
import { addBook, deleteBook } from 'store/favoriteBooks/favoriteBooks.slice';
import { useAppDispatch } from 'store/store.hooks';

export const Book: FC<{ book: BookProps }> = ({ book }) => {
  const { id } = book;
  const { title, authors, description, imageLinks, averageRating } = book.volumeInfo;
  const [favorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();

  const handlerClickLiked = () => {
    if (!favorite) {
      setFavorite(true);
      dispatch(addBook(book));
    } else {
      setFavorite(false);
      dispatch(deleteBook(id));
    } 
  };

  return (
    <article className={styles.book}>
      <div className={styles.img}>
        {imageLinks?.thumbnail ? (
          <img src={imageLinks.thumbnail} width="150" height="300" alt={title} />
        ) : (
          <div className={styles.noImage}>Нет обложки</div>
        )}
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.authors}>
          {authors?.length > 0 && (
            <>
              <span>{`Авто${authors.length > 1 ? 'ры' : 'р'}`}:</span> {authors.join(', ')}
            </>
          )}
        </div>
        <div className={styles.description}>{description}</div>
        {averageRating && <div className={styles.rating}>Рейтинг: {averageRating}</div>}

        <div className={styles.controls}>
          <button className={clsx(styles.button, favorite && styles.liked)} onClick={handlerClickLiked}>
            <LikeIcon width={35} height={35} fill={'#185abc'} />
          </button>
          <button className={clsx(styles.button, styles.delete)}>
            <DeleteIcon width={32} height={32} fill={'grey'} />
          </button>
        </div>
      </div>
    </article>
  );
};
