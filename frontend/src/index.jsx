import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './main/App'
import Reducers from './main/reducers'

import promise from 'redux-promise'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(Reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
