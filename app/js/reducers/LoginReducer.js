'use strict'

export default function LoginReducer(previous = {}, action) {
  // Do nothing
  const { type, payload } = action
  switch(type) {
    case "LOGIN_USER":
    return Object.assign({}, previous, {
      username: payload.username
    })
  }
  return previous
}
