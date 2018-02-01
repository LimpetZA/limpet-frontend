'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import UploadForm from './UploadForm.jsx'

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
class Upload extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const sumbit = values => {
      console.log(values)
    }

    return (
    <div style={style} >
      <UploadForm onSubmit={this.submit}/>
    </div>
    )
  }
}

/**
 * Export
 * @ignore
 */
export default connect()(Upload)