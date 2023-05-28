import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './JS/store/store';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider> 
  </Router>,
  document.getElementById('root')
);
