import React, { Component } from 'react';
import './Home.css';

// Components to be imported
import SearchBar from '../SearchBar/SearchBar.js';
import MoviesContainer from '../MoviesContainer/MoviesContainer.js';

class Home extends Component {
  render() {
    return (
      <div className='view-container'>
        <SearchBar />
        <MoviesContainer />
      </div>
    );
  }
}

export default Home;
