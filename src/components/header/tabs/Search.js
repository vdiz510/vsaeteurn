import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../tabs/SearchBar'
import './Search.css'

const Search = () => {
  const [term, setTerm] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get('https://api-nba-v1.p.rapidapi.com/seasons/', {
  //       params: {
  //         'x-rapidapi-key': APIKEY
  //       }
  //     })
  //     // setNbaData()
  //   }

  //   getData()
  // }, [])


  return (
    <div className="search-bar">
      <SearchBar />
    </div>
  )
}

export default Search;