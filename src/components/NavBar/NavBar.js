import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


export default class NavBar extends Component{
  constructor(){
    super();
    this.redirectHome= this.redirectHome.bind(this);
  }

  redirectHome(){
    window.location.href='/'
  }

  render(){
    return(
      <div className='nav-container'>
        <p className='nav-home' onClick={ ()=> this.redirectHome() }>HOME</p>
        <p>SEARCH</p>
      </div>
    )
  }
}
