import React, { useState } from 'react'
import Link from './Link'
import './NavBar.css'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="ui secondary menu navbar">
      <div className="right menu">

        <Link href="/" className="item">
          Home
        </Link>

        <Link href="/about" className="item">
          About Me
        </Link>

        <Link href="/demos" className={`ui simple dropdown item ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
          Demos
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">
              <i className="dropdown icon"></i>
              <span className="text">NBA</span>
              <div className="menu">
                <div className="item">Teams</div>
                <div className="item">Live Scores</div>
              </div>
            </div>
            <div className="item">Youtube Search</div>
          </div>
        </Link>

        <Link href="/socials" className="item">
          Socials
        </Link>
      </div>
    </div>
  )
}

export default NavBar;