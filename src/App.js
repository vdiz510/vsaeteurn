// import { render } from '@testing-library/react';
import React from 'react'
import NavBar from './components/NavBar'
import './components/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="ui container navbar">
        <NavBar />
      </div>
    )
  }
}

export default App;
