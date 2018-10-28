import React, { Component } from 'react'
import {
  Route, Redirect, Switch
} from 'react-router-dom'
import Test from './screens/Test'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      renderChild: true,
      notificationsEnabled: false,
      notifications: [],
      ajaxState: 'IDLE',
      gapiReady: false,
    }
    this.projects = []
    this.profiles = []
  }

  render () {
    return (
      <Switch>
        <main className="main">
          <Route exact path="/" render={() => <Redirect to="/index" />} />
          <Route exact path="/test" render={(props) => <Test />} />
          <Route exact path="/test2" render={(props) => <Test />} />
        </main>
      </Switch>
    )
  }
}

export default App
