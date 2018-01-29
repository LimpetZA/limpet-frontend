'use strict'

export default function LoginReducer(state = {}, action) {
  // Do nothing
  const { type, payload } = action
  switch(type) {
    case "ATTEMPT_LOGIN": {
      const { res, uri } = payload
      let { isLoggedIn, attemptedLogin } = state
      if(res.status === 200) {
        isLoggedIn = true
      } else {
        isLoggedIn = false
        attemptedLogin = true
      }

      return { ...state, username: 'Guest', isLoggedIn, attemptedLogin}
    }
    case "RESET_ATTEMPT":
      return { ...state, attemptedLogin : false}
  }
  return state
}
