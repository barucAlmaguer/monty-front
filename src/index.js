import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker, { unregister } from './registerServiceWorker';
import App from './App';
const versionTracker = require('./versionTracker.json');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
if (versionTracker.version != localStorage.getItem('version')) {
  unregister();
  localStorage.setItem('version', pjson.version);
} else {
  registerServiceWorker();
}
