import React, { Component } from 'react';
import axios from 'axios';
import './SearchResults.css';

export default class SearchResults extends Component{
  constructor(props){
    super(props);

    this.state= {
      searchList: []
    }
  }

  componentWillMount(){
    axios.get(`/api/search/movies/${this.props.match.params.name}`).then(response=> {
      this.setState({ searchList: response.data.results });
    });
  }

  render(){
    const imgURL= 'http://image.tmdb.org/t/p/original';
    const searchResults= this.state.searchList.map((movie, index)=> {
      return(
        <div key={ index } className='results-card'>
          <img style={{ height: '85%', width: '100%' }} src={ imgURL + movie.poster_path } alt='movie poster'></img>
          <h4>{ movie.original_title }</h4>
          <p>Rating: { movie.vote_average }/10</p>
        </div>
      )
    });

    return(
      <div className='view-container'>
        <h1>You searched for... { this.props.match.params.name }</h1>

        <div className='results-container'>
          { searchResults }
        </div>
      </div>
    )
  }
}
