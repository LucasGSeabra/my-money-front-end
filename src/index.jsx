import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import App from './App';
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import multi from 'redux-multi'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, reduxThunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}> 
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
