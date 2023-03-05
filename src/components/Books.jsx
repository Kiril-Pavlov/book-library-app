import React from 'react'

import Book from "./Book"

const Books = ({books}) => {
  console.log(books)
  return (
    <div className='books'>
      {books.map(book=>(
        <Book title={book.title} author={book.author} genre={book.genre}/>
      ))}
    </div>
  )
}

export default Books