import React, { useState } from 'react'
import Link from './Link'
import './NavBar.css'

const NavBar = () => {
  // const [open, setOpen] = useState(false)

  return (
    <div className="ui secondary menu navbar container">
      <div className="right menu">

        <Link href="/" className="item">Home</Link>
        <Link href="/about" className="item">About Me</Link>

        <div className="ui simple dropdown item">
          Demos
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">
              <i className="dropdown icon"></i>
              <span className="text">NBA</span>
              <div className="menu">
                <Link href="/nba-teams" className="item">Teams</Link>
                <Link href="/nba-scores" className="item">Live Scores</Link>
              </div>
            </div>
            <Link href="/search" className="item">Youtube Search</Link>
          </div>
        </div>

        <Link href="/socials" className="item">Socials</Link>
      </div>
    </div>
  )
}

export default NavBar;