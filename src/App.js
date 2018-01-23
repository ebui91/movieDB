import React, { Component } from 'react';
import './App.css';

// Components to be imported
import SearchBar from './components/SearchBar/SearchBar.js';
import MoviesContainer from './components/MoviesContainer/MoviesContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className= "title-header">MOVIES</h1>
        <SearchBar />
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
