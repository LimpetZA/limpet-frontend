'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { Switch , Route, Redirect} from 'react-router'

import Upload from './Upload.jsx'
import UploadCSV from './UploadCSV.jsx'

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
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
class Private extends React.Component {

  constructor(props) {
    super(props)
    this.state = { firstName: '', lastName: ''}
  }

  componentWillMount() {
    // auth code here
  }

  render() {
    return (
        <Switch>
          <Redirect exact from='/private/' to='/private/csv'/>
          <Route path='/private/upload' component={Upload}/>
          <Route path='/private/csv' component={UploadCSV}/>
        </Switch>
    )
  }
}

/**
* Export
* @ignore
*/
export default connect()(Private)