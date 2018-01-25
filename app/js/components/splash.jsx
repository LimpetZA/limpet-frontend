'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
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
class Splash extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
     <div style={style}><h1>Hi Finn</h1></div>
    )
  }
}

/**
 * Export
 * @ignore
 */
export default connect(mapStateToProps, mapDispatchToProps)(Splash)