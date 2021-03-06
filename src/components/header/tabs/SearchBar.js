import React, { useEffect, useState } from 'react'
import './Search.css'

const SearchBar = () => {
  const [term, setTerm] = useState('')

  const onInputChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div className="search-bar ui segment container">
      <form className="ui form">
        <div className="field">
          <label>Search YouTube Videos</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;