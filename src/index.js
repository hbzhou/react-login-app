import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavigationBar />
    </Router>
  </Provider>,
  document.getElementById('root'));

