'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
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
    return (
    <div style={style} >
      <RegisterForm/>
    </div>
    )
  }
}

/**
 * Export
 * @ignore
 */
export default connect()(Register)