import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
// Components
// Screens
import Index from './screens/Index';
import './assets/stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    );
  }
}

export default App;
