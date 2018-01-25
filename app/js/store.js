'use strict'

import { createStore, combineReducers } from 'redux'

import reducers from './reducers'

const store = createStore(
  combineReducers(reducers), {
    loginReducer: { username: 'Guest' }
  }
)

export default store