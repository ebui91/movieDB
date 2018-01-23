import React, { Component } from 'react';
import axios from 'axios';
import './MoviesContainer.css';


export default class MoviesContainer extends Component{
  constructor(props){
    super(props);

    this.state= {
      moviesList: []
    }
  }

  componentWillMount(){
    axios.get('http://localhost:3001/api/popular/movies').then(response=> {
      console.log(response.data.results);
      this.setState({ moviesList: response.data.results });
    });
  }

  render(){
    const imgURL= 'http://image.tmdb.org/t/p/original';
    const movies= this.state.moviesList.map((movie, index)=> {
      return(
        <div key={ index } className='movie-card'>
          <img style={{ height: '80%', width: '100%' }} src={ imgURL + movie.poster_path }></img>
          <h3>{ movie.original_title }</h3>
          <p>Rating: { movie.vote_average }/10</p>
        </div>
      )
    });

    return(
      <div className='movies-container-main'>
        { movies }
      </div>
    )
  }
}
