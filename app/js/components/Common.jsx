'use strict'

const InputHandler = (event, parent) => {
  const { target } = event
  const { id } = target
  const value = target.value
  parent.setState({[id]: value})
}

export default { InputHandler }