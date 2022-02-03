// import { render } from '@testing-library/react';
import React from 'react'
import NavBar from './header/NavBar'
import Route from './header/Route'
import Home from './Home'
import About from './About'
import Socials from './Socials'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="ui container navbar">
        <NavBar />

        <Route path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/socials'>
          <Socials />
        </Route>
      </div>
    )
  }
}

export default App;
