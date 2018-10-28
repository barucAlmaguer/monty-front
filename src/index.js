import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker, { unregister } from './registerServiceWorker'
import rootReducer from './reducers'
import App from './App'

const versionTracker = require('./versionTracker.json')

const store = createStore(rootReducer)

const httpLink = createHttpLink({
  uri: 'http://Barux301.local:4000/api/'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('auth-token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)

if (versionTracker.version !== localStorage.getItem('version')) {
  unregister()
  localStorage.setItem('version', versionTracker.version)
} else {
  registerServiceWorker()
}
