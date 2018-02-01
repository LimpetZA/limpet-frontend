'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { HashRouter as Router, Route, IndexRoute, Redirect, Switch } from 'react-router-dom'
import { createHashHistory } from 'history'
import { ConnectedRouter } from 'react-router-redux'

import store from './store'

import LoginPage from './components/LoginPage.jsx'
import Register from './components/app/Register.jsx'
import Private from './components/app/private/index.jsx'

/**
 * Styles
 * @ignore
 */
const styles = {
  parentContentStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 100,
  }
}

const history = createHashHistory()

/**
 * Export
 * @ignore
 */
export default (
  <ConnectedRouter history={history}>
    <div style={styles.parentContentStyle}>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={Register}/>
        <Route path="/private" component={Private} />
      </Switch>
    </div>
  </ConnectedRouter>
)