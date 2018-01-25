'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import limpetLogo from '../../images/limpet-logo.png'

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
    verifyLogin: () => {
      dispatch({type: 'VERIFY_LOGIN'})
    }
  }
}

/**
 * mapStateToProps
 * @ignore
 */
const mapStateToProps = (state, ownProps) => {
  return {

  }
}
/**
 * UserMenu
 * @class
 */
class LoginBox extends React.Component {

  constructor(props) {
    super(props)
  }

  login() {
    const loginOpts = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }

    let username = document.getElementById("username"), password = document.getElementById("password")
    console.log(username.value, ":", password.value)
    let postData = Object.assign({}, loginOpts, { body: JSON.stringify({ "username": username.value, "password": password.value })})
    let uri = window.location.hostname
    let port = window.location.port

    fetch(`http://${uri}:${port}/api/login`, postData).then(res => {
      if( res.status === 200 ) {
        document.location.hash = "/app/upload"
      }
      else throw new Error('Login failed') // TODO: replace with user feedback
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <Paper style={style}>
        <img src={limpetLogo} style= {{width: "65%"}}/>
        {//<h2>Limpet ZA</h2>}
        }<TextField style={componentStyle} label="Username" id="username"/>
        <TextField style={componentStyle} label="Password" type="password" id="password"/>
        <div style={buttonContainer}>
          <Button style={componentStyle} onTouchTap={() => window.location.hash = 'register'} >Register</Button>
          <Button raised style={componentStyle} onTouchTap={() => this.login(this.props)} color="primary">Login</Button>
        </div>
     </Paper>
    )
  }
}

/**
 * Export
 * @ignore
 */
export default connect()(LoginBox)