'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import router from './router.jsx'
import store from './store'

import Background from '../images/login-background.jpg';

/**
 * Tap Event
 * @ignore
 */
injectTapEventPlugin()

/**
 * Styles
 * @ignore
 */
const style = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '100',
    position: 'relative',
    height: '100%',
    backgroundImage: `url(${Background})`
  },
  appStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 75,
    height: '100%'
  },
  topBarStyle: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 100,
  }
}

/**
 * MainLayout
 * @class
 */
class MainLayout extends React.Component {
  componentDidMount() {
    //this.props.initPanmnesia()
  }

  render() {
    let { appContainer, appStyle, topBarStyle } = style

    return (
      <div style={appContainer}>
        <div style={appStyle}>
          {router}
        </div>
      </div>
    )
  }
}

/**
 * DOM
 * @ignore
 */
ReactDOM.render(
    <Provider store={store}>
        <MainLayout />
    </Provider>,
  document.getElementById('app')
)