'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { HashRouter as Router, Route, IndexRoute, Redirect, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import LoginPage from './components/LoginPage.jsx'
import Register from './components/app/Register.jsx'
import Upload from './components/app/upload/Upload.jsx'

/**
 * Styles
 * @ignore
 */
const styles = {
  parentContentStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100%',
    flex: 100,
  }
}

/**
 * Export
 * @ignore
 */
export default (
  <Router>
    <div style={styles.parentContentStyle}>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={Register}/>
        <Route path="/app/upload" component={Upload}/>
      </Switch>
    </div>
  </Router>
)