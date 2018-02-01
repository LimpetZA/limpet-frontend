'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { Button, Subheader } from 'material-ui'
import handle from '../Common.jsx'
import { Redirect } from 'react-router-dom'

/**
 * mapDispatchToProps
 * @ignore
 */
const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: payload => {
      dispatch({ type: 'USER_REGISTER', payload })
    }
  }
}

/**
 * mapStateToProps
 * @ignore
 */
const mapStateToProps = (state, ownProps) => {
  const { loginReducer: {  registerSuccess } } = state
  return { registerSuccess }
}

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: "15px",
}, rowContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'center',
  width: '100%',
  flex: 1
}, headerStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignText: 'center'
}, componentStyle = {
  margin: '5px'
}


/**
 * UserMenu
 * @class
 */
class RegisterForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { email: "", username: "", password: "" }
    //this.handleInputChange = this.handleInputChange.bind(this);
    //this.submit = this.submit.bind(this);
  }

  handleChange(name) {
    return (event) => this.setState({
      [name]: event.target.value,
    })
  }

  register() {
    const { props: { userRegister }, state: { username, password } } = this
    const registerOpts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    }
    const json = JSON.stringify({ username, password })
    const postData = { ...registerOpts,  body: json  }
    console.log(postData)
    // fetch('/api/register', postData).then(res => res.json()).then((json) => userRegister({ json })) // after the patch for json errors
    fetch('/api/register', postData).then((res) => userRegister({ res }))
  }

  renderRegistrationForm() {
    const { props: { registerSuccess } } = this
    return (
    <Paper style={style} >
      { registerSuccess ? <Redirect to='/login'/>  : <div/> }
      <title style={headerStyle}>Register to Limpet ZA</title>
      <TextField style={componentStyle}
          value={this.state.username}
          onChange={this.handleChange('username')}
          label="Email Address"
          id="username"
          margin="dense" />
      <TextField style={componentStyle}
          value={this.state.password}
          onChange={this.handleChange('password')}
          label="Password"
          id="username"
          margin="dense" />
      <TextField style={componentStyle} label="Desired Username"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="dense"/>
      <div style={rowContainer}>
        <Button style={componentStyle} onTouchTap={(event) => window.location.hash="/"}>Back</Button>
        <Button style={componentStyle} raised onClick={() => this.register()}>Done</Button>
      </div>
    </Paper>
    )
  }
  render() {
    let { props: { registerSuccess, isLoggedIn } } = this
    return (
      this.renderRegistrationForm()
    )
  }
}

/**
 * Export
 * @ignore
 */
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)