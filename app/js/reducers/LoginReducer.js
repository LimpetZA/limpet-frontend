'use strict'

const cookies = new (require('universal-cookie'))()

export default function LoginReducer(state = {}, action) {
  // Do nothing
  const { type, payload } = action
  switch(type) {
    case "ATTEMPT_LOGIN": {
      const { res } = payload
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
    case "USER_REGISTER":
    //console.log("here ", payload)
      //const { res: { json } } = payload
      //const { success } = json
      const { res: { status } } = payload
      //console.log(payload.res.json().then(console.log))
      if(status === 200) return { ...state, registerSuccess: true }
      else return { ...state, registerSuccess: false}
  }
  return state
}
