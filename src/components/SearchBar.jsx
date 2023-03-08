import React, { useState } from 'react'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("")
  console.log(searchInput)
  return (
    <div className='search'>
      <input className='search__input' type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
      <button className='search__button'>SEARCH</button>
    </div>
  )
}

export default SearchBar