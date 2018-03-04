import React, { Component } from 'react';
import Router from './router.js';
import NavBar from './components/NavBar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        { Router }
      </div>
    );
  }
}

export default App;
