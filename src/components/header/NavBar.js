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


        {/* <Menu secondary>
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="about me"
              active={activeItem === 'about me'}
              onClick={this.handleItemClick}
            />
            <Dropdown text='Demos' pointing className='link item'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Dropdown text='NBA'>
                    <Dropdown.Menu>
                      <Dropdown.Item >Teams</Dropdown.Item>
                      <Dropdown.Item>Live Scores</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>YouTube</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item
              name="socials"
              active={activeItem === 'socials'}
              onClick={this.handleItemClick}
            />
          </Menu>
           */}
      </div>
    </div>
  )
}

export default NavBar;