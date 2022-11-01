import { Book } from 'components/Book'
import React, { FC, useState } from 'react'
import { BookListProps } from './BookListProps.types'
import { selectFavoriteBooks } from 'store/favoriteBooks/favoriteBooks.selectors'

import styles from './BookList.module.scss'
import { useAppSelector } from 'store/store.hooks'

export const BookList: FC<BookListProps> = ({ books }) => {
  
  return (
    <section>
        
            <ul className={styles.books}>
            {
                 books.map((book) => <li key={book.id} className={styles.item}><Book book={book} /></li>)
                }
            </ul>
           
    </section>
  )
}
