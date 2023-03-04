import React from 'react'

import SearchBar from "../components/SearchBar"
import Books from "../components/Books"


import bookList from "../data/listofbooks.json"

console.log(bookList)

const BookLibrary = () => {
  return (
    <div>
        <SearchBar/>
        <Books/>
    </div>
  )
}

export default BookLibrary