/* import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import init from './App'
import movie from './movie'

Oi = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={init} />
            <Route path="/movie" component={movie} />
        </Switch>
    </ BrowserRouter>
    );
}

class Routes extends Component {
    render() {
        return(
            <div>
                {this.Oi()}
            </div>
        )
    }
}

export default Routes; */