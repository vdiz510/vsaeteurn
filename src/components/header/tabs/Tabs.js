import React from 'react'
import Route from '../Route'
import Home from './Home'
import About from './About'
import Socials from './Socials'
import NbaTeams from './NbaTeams'
import NbaScores from './NbaScores'
import Search from './Search'

const Tabs = () => {
  return (
    <div>
      <Route path='/'><Home /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/nba-teams'><NbaTeams /></Route>
      <Route path='/nba-scores'><NbaScores /></Route>
      <Route path='/search'><Search /></Route>
      <Route path='/socials'><Socials /></Route>
    </div>
  )
}

export default Tabs;