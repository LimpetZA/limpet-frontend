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
class UploadForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { firstName: '', lastName: ''}

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
  }

  submit(v) {
    let { firstName, lastName } = this.state
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

handleInputChange(event) {
  const { target } = event
  const { id } = target
  const value = target.value
  this.setState({[id]: value})
}

render() {
  return (
    <Paper style={style}>
      <form style={style} onSubmit={this.submit} id="uploadForm">
        <label htmlFor="hello">Data Submission</label>
        <TextField style={componentStyle} value={this.state.firstName} onChange={this.handleInputChange} label="First Name" id="firstName" />
        <TextField style={componentStyle} value={this.state.lastName} onChange={this.handleInputChange} label="Last Name" id="lastName" />
        <Button raised type="submit">Submit</Button>
      </form>
    </Paper>
  )
}
}

/**
* Export
* @ignore
*/
export default connect()(UploadForm)