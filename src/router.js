import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import components to be rendered
import Home from './components/Home/Home.js';
import SearchResults from './components/SearchResults/SearchResults.js';

export default(
  <BrowserRouter>
    <Switch>
      <Route component={ Home } exact path='/' />
      <Route component={ SearchResults } path= '/search/movies/:name' />
    </Switch>
  </BrowserRouter>
)
