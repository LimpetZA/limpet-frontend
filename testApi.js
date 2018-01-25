'use strict'

/**
 * This file is an example for using the Panmnesia backend.
 */

const request = require("request")
const rp = require("request-promise-native")
const tough  = require('tough-cookie')

const url = "http://localhost:3000/command"


const loginData = {
  uri: 'http://localhost:3000/login',
  method: 'POST',
  json: true,
  resolveWithFullResponse: true
}


const commandOptions = {
  uri: 'http://localhost:3000/command',
  method: 'POST',
  json: true,
  resolveWithFullResponse: true
}

const getOptions = {
  uri: 'http://localhost:3000/authed',
  method: 'GET',
  json: true,
  resolveWithFullResponse: true

}

const debugLog = d => {console.log(d); return d;}
const Cookie = tough.Cookie

rp( Object.assign({}, loginData, { body: { "username": "123", "password": "123" }}) )
  .then(res => {
    if( res.headers['set-cookie'] instanceof Array )
      return res.headers['set-cookie'].map(Cookie.parse)
    else throw new Error('Login Failed')
  })
  .then(cookie => {
    const cookieJar = rp.jar()
    cookieJar.setCookie(cookie[0], 'http://localhost')
    //rp(getOptions).catch(console.log)
    return rp( Object.assign({},
      commandOptions,
      { body:
        { "type" : "test", "payload" :
          { "foo" : "bar" }
        },
        jar: cookieJar
      }))
    .then(e => console.log(e.statusCode ? e.statusCode : e))
    .catch(e => console.warn(e.message ? e.message : e))
  })

//const cookieJar = rp.jar()
//cookieJar.setCookie(cookie, 'http://localhost')
