import React from 'react'

import Book from "./Book"

const Books = ({books}) => {
  console.log(books)
  return (
    <div className='books'>
      {books.sort(
          (a,b)=>{
            if(a.author.toLowerCase()<b.author.toLowerCase()){
              return -1;
            }else{
              return 1;
            }
          }).map(book=>(
        <Book key={book.title} title={book.title} author={book.author} genre={book.genre}/>
      ))}
    </div>
  )
}

export default Books