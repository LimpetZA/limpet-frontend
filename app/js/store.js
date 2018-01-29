'use strict'

import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { createHashHistory } from 'history'
import reducers from './reducers'

const history = createHashHistory()
const middleware = routerMiddleware(history)


const store = createStore(
  combineReducers({...reducers, router: routerReducer}), {
    ...applyMiddleware(middleware),
    loginReducer: { username: 'Guest', isLoggedIn: false, attemptedLogin: false }
  }
)

export default store