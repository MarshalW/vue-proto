import {
  login
} from '@/api/login'

const user = {
  namespaced: true,
  state: {
    token: 'guest'
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_NAME: (state, userName) => {
      state.userName = userName
      console.log(`state.userName: ${state.userName}`)
    }
  },

  actions: {
    Login ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo.userName, userInfo.password).then((response) => {
          const data = response.data
          console.log('==>>login ok!')
          commit('SET_TOKEN', data)
          commit('SET_USER_NAME', userInfo.userName)
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    }
  },
  getters: {
    token: state => {
      return `t-${state.token}`
    }
  }
}

export default user
