import React, { FC } from 'react';
import { BookProps } from './Book.types';

import styles from './Book.module.scss';

export const Book: FC<{ book: BookProps }> = ({ book }) => {
  const { title, authors, description, imageLinks, averageRating } = book.volumeInfo;
  return (
    <article className={styles.book}>
      <div className={styles.img}>
        <img src={imageLinks.small} alt={title} width={192} height={300} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.authors}>
          {authors?.length > 0 && (
            <>
              <span>{`Авто${authors.length > 1 ? 'ры' : 'р'}`}:</span> {authors.join(', ')}
            </>
          )}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.rating}>Рейтинг: {averageRating}</div>
          <div className={styles.controls}>
            <div>like</div>
            <div>delete</div>
          </div>
        
      </div>
    </article>
  );
};
