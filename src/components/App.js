// import { render } from '@testing-library/react';
import React from 'react'
import NavBar from './header/NavBar'
import Tabs from './header/tabs/Tabs'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Tabs />
      </div>
    )
  }
}

export default App;
