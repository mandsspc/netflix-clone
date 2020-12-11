import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movie from './movie';
import Show from './show';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Fake Server 
import { mockedServer } from './server/';

mockedServer();

ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/movie" component={Movie} />
            <Route path="/show" component={Show} /> 
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
 