import React, { Component } from 'react';
import { Switch, Redirect,  Route } from 'react-router';
// Components
// Screens
import Index from './screens/Index';
import './assets/stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/index" />} />
        <Route exact path="/index" component={Index} />
      </Switch>
    );
  }
}

export default App;
