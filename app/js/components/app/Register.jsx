'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
import { Redirect } from 'react-router'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

import RegisterForm from './RegisterForm.jsx'

/**
 * mapDispatchToProps
 * @ignore
 */
const mapDispatchToProps = (dispatch) => {

}

/**
 * mapStateToProps
 * @ignore
 */
const mapStateToProps = (state, ownProps) => {
  let {
    loginReducer: { isLoggedIn }
  } = state
  return { isLoggedIn }
}

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 100
}

/**
 * UserMenu
 * @class
 */
class Register extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const  { isLoggedIn } = this.props
    return (
      isLoggedIn ? <Redirect to='/private' /> :  <RegisterForm/>
    )
  }
}

/**
 * Export
 * @ignore
 */
export default connect(mapStateToProps)(Register)