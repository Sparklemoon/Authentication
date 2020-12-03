import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home"
import Login from "./pages/login"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path ="/login" component={Login} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
