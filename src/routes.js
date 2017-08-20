"use strict";

import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/login/LoginPage';
import Search from './components/search/SearchPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="search" component={Search} />
    
    
  </Route>
);
