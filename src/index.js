import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const qs = require('querystring');
const Cookies = require('js-cookie');


function parseTokenFromUrl() {
  const parsed = qs.parse(window.location.search.slice(1));
  if (parsed.token !== undefined) {
      Cookies.set('token', parsed.token);
      // update url in the address bar without refreshing the page.
      window.history.replaceState(window.history.state, window.history.pageTitle, '/');
  }
}

parseTokenFromUrl();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
