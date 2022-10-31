import React from 'react';
import { BookList } from 'components/BookList';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={'container'}>
      <h1 className={styles.title}>Список книг из Google Books</h1>  
      <BookList books={[
        {
          id: '1',
          volumeInfo: {
            title: 'The Google story',
            authors: [
              "David A. Vise",
              "Mark Malseed"
             ],
             description: 'Here is the story behind one of the most remarkable Internet successes of our time. Based on scrupulous research and extraordinary access to Google, ...',
             imageLinks: {
              small: "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"
             },
             averageRating: 3.5
          }

        }
      ]} />
    </main>

  );
};
