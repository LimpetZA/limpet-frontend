'use strict'

import React from 'react'
import { connect, Provider } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Papa from 'papaparse'
import Dropzone from 'react-dropzone'

import UploadForm from './UploadForm.jsx'
import Textarea from 'material-ui/Input/Textarea';
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
  grow: 2,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-around',
  padding: "15px",
}

/**
 * UserMenu
 * @class
 */
class UploadCSV extends React.Component {

  constructor(props) {
    super(props)
    this.state = { output: "" }
  }

  completed (results, file) {
    console.log("Parsing complete:", results.data)
    const res = results.data.slice(1).reduce((out, line) => out += `Name: ${line[0]}, Zone: ${line[1]}, Count: ${line[2]}, Lengths: ${line.slice(3)}\n\n`, "")
    const resJSON = results.data.slice(1).map((line) => { return { name: line[0], zone: line[1], count: line[2], lengths: line.slice(3)} })
    this.setState({output: res})
    const meta = { event: "Workshop 1", date: Date.now() } //date or stuff
    const opts ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ type: "upload", payload: {meta, data: resJSON } })
    }
    //console.log(JSON.stringify({ type: "upload", payload: {meta, data: resJSON } }, null, 2))
    console.log(opts)
    fetch('/api/command', opts).then(console.log)
  }
  onDrop(acceptedFiles, rejectedFiles) {
    // console.log('Accepted files: ', acceptedFiles[0].name);
    const data = Papa.parse(acceptedFiles[0], { complete: (res, files) => this.completed(res, files) })
  }

  renderCSVUploadForm() {
    return (
      <Paper>
      <Dropzone onDrop={(files) => this.onDrop(files)}>
                <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
          <Textarea value={this.state.output}/>
      </Paper>)
  }
  render() {
    const sumbit = values => {
      //console.log(values)
    }

    return (
      this.renderCSVUploadForm()
    )
  }
}

/**
 * Export
 * @ignore
 */
export default connect()(UploadCSV)