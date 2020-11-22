import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import App from './App';
import reducers from './reducers'

const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}> 
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
