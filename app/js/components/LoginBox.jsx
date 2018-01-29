'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
import { Snackbar } from 'material-ui';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import limpetLogo from '../../images/limpet-logo.png'

import { Redirect } from 'react-router-dom'

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-around',
  padding: "15px",
}, buttonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'center',
  width: "80%",
  height: '100px',
  flex: 100
}, componentStyle = {
  margin: '5px'
}

/**
 * mapDispatchToProps
 * @ignore
 */
const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: payload => {
      dispatch({type: 'ATTEMPT_LOGIN', payload })
    },
    closeSnackbar: () => {
      dispatch({type: "RESET_ATTEMPT"})
    }
  }
}

/**
 * mapStateToProps
 * @ignore
 */
const mapStateToProps = (state, ownProps) => {
  let {
    loginReducer: { isLoggedIn, attemptedLogin }
  } = state
  return { isLoggedIn, attemptedLogin }
}
/**
 * UserMenu
 * @class
 */
class LoginBox extends React.Component {

  constructor(props) {
    super(props)
  }


  login () {
    const loginOpts = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }

    let username = document.getElementById("username").value, password = document.getElementById("password").value
    let json = JSON.stringify({ username, password })
    let postData = { ...loginOpts,  body: json  }

    fetch(`/api/login`, postData).then((res) => this.props.attemptLogin({res}))
  }

  renderLogin() {
    const { props: { attemptedLogin }} = this
    return (
      <Paper style={style}>
        <img src={limpetLogo} style= {{width: "65%"}}/>
        { attemptedLogin ? <Snackbar
          message={"Login failed"}
          open={attemptedLogin}
          onClose={this.props.closeSnackbar}/> : <div/> }
        <TextField style={componentStyle} label="Username" id="username"/>
        <TextField style={componentStyle} label="Password" type="password" id="password"/>
        <div style={buttonContainer}>
          <Button style={componentStyle} onTouchTap={() => window.location.hash = 'register'} >Register</Button>
          <Button raised style={componentStyle} onTouchTap={() => this.login(this.props)} color="primary">Login</Button>
        </div>
     </Paper>
    )
  }

  render() {
    const { props: { isLoggedIn }} = this

    return (
      isLoggedIn ? <Redirect to='/app/upload'/> : this.renderLogin()
    )
  }
}

/**
 * Export
 * @ignore
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginBox)
