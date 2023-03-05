import React from 'react'

import SearchBar from "../components/SearchBar"
import Books from "../components/Books"


import bookList from "../data/listofbooks.json"


const BookLibrary = () => {
  return (
    <div className='library'>
        <SearchBar/>
        <Books books={bookList}/>
    </div>
  )
}

export default BookLibrary