import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker, { unregister } from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './App';

const versionTracker = require('./versionTracker.json');
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

if (versionTracker.version !== localStorage.getItem('version')) {
  unregister();
  localStorage.setItem('version', versionTracker.version);
} else {
  registerServiceWorker();
}
