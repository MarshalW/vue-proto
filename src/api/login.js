import axios from 'axios'

import MockAdapter from 'axios-mock-adapter'
const mock = new MockAdapter(axios, { delayResponse: 1000 })

// mock.onPost('/login').reply(500)

mock.onPost('/login').reply(200, {
  data: {
    status: 'ok'
  }
})

export function login (userName, password) {
  const data = {
    userName,
    password
  }

  return axios.post('/login', data)
  // return new Promise(resolve => setTimeout(_ => resolve('theValue'), 2000))
}
