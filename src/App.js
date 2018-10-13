import React, { Component } from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
// Components
import { Login }from 'valiot-framework'
import { Sidebar } from 'valiot-framework'
import { Item } from 'valiot-framework'
import { Activity } from 'valiot-framework'

// Screens
import Index from './screens/Index'

// Assets
import './assets/stylesheets/App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderChild: true,
      notificationsEnabled: false,
      notifications: []
    }
  }

  handleChildUnmount = () => {
    this.setState({ renderChild: false });
  }

  toggleNotifications = () => {
    this.setState({ notificationsEnabled: !this.state.notificationsEnabled })
  }

  updateNotifications = (notifications) => {
    this.setState({ notifications: notifications });
  }

  refresh = () => {
    this.forceUpdate()
  }

  logout = () => {
    localStorage.removeItem('auth-token')
    this.forceUpdate()
  }

  render() {
    const token = localStorage.getItem('auth-token')

    if (!token) {
      return (
        <Login refresh={this.refresh} />
      );
    }

    return (
      <Switch>
        <Route exact path="/login" component={Login} />

        <main className="main">
          <Sidebar
            notifications={this.state.notifications}
            toggleNotifications={this.toggleNotifications}
            logout={this.logout}
          >
            <Item name="Index" route="index" iconName="default" />
          </Sidebar>

          <Activity
            notifications={this.state.notifications}
            enabled={this.state.notificationsEnabled}
            updateNotifications={(notifications) => this.updateNotifications(notifications)}
          />

          <Route exact path="/" render={() => <Redirect to="/index" />} />
          <Route exact path="/index" component={Index} />
        </main>
      </Switch>
    );
  }
}

export default App
