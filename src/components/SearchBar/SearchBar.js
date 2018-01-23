import React, { Component } from 'react';
import axios from 'axios';
import './SearchBar.css';


export default class SearchBar extends Component{
  constructor(){
    super();

    this.state= {
      searchVal: '',
      searchList: []
    }
    this.handleSearchInput= this.handleSearchInput.bind(this);
  }

  handleSearchInput(input){
    this.setState({ searchVal: input });
    console.log(input);
  }

  submitSearch(){
    axios.get(`http://localhost:3001/api/search/movies?name=${this.state.searchVal}`)
      .then(response=> {
        this.setState({ searchList: response.data.results });
      });
  }

  render(){
    return(
      <div className='searchbar-container'>
        <input type='text' placeholder='Search...' onChange={ (e)=> this.handleSearchInput(e.target.value) }></input>
        <button onClick={ ()=> this.submitSearch() }>SEARCH</button>
      </div>
    )
  }
}
