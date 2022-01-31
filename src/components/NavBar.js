import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      // <div className="ui menu">
      //   <a className="item">Home</a>
      //   <div className="ui pointing dropdown link item visible active">
      //     <span className="text">Dropdown Test</span>
      //     <i className="dropdown icon"></i>
      //     <div className="menu">
      //       <div className="header">Categories</div>
      //       <div className="item">About</div>
      //     </div>
      //   </div>
      // </div>

      <div className="ui secondary menu navbar">
        <div className="right menu">
          <a className="active item">Home</a>
          <a className="item">About Me</a>
          <a className="item">Experience</a>
          <a className="item">Socials</a>
        </div>
      </div>
    )
  }
}

export default NavBar;