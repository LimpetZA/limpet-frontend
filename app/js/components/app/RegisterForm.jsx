'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { Button, Subheader } from 'material-ui'
import handle from '../Common.jsx'

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

    //this.handleInputChange = this.handleInputChange.bind(this);
    //this.submit = this.submit.bind(this);
  }

  register() {
    let { username, password } = {}
    fetch('http://localhost:3000/command', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
    })
  })
  }

  render() {
    return (
    <Paper style={style} >
      <title style={headerStyle}>Register to Limpet ZA</title>
      <TextField style={componentStyle} label="Username" />
      <TextField style={componentStyle} label="Password" />
      <div style={rowContainer}>
        <Button style={componentStyle} onTouchTap={(event) => window.location.hash="/"}>Back</Button>
        <Button style={componentStyle} raised onClick={this.register}>Done</Button>
      </div>
    </Paper>
    )
  }
}

/**
 * Export
 * @ignore
 */
export default connect()(RegisterForm)