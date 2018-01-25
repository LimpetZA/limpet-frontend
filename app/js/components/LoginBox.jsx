'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'


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
  width: "100%",
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
    let username = document.getElementById("username"), password = document.getElementById("password")
    console.log(username.value, ":", password.value)

  }

  render() {
    return (
      <Paper style={style}>
        <h2>Limpet ZA</h2>
        <TextField style={componentStyle} label="Username" content={this.props.username} id="username"/>
        <TextField style={componentStyle} label="Password" content={this.props.password} type="password" id="password"/>
        <div style={buttonContainer}>
          <Button style={componentStyle} onTouchTap={() => window.location.hash = 'register'} >Register</Button>
          <Button raised style={componentStyle} onTouchTap={this.login} color="primary"> Login </Button>
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