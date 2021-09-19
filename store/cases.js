export const state = () => ({
  fetchCases: []
})

export const mutations = {
  SET_FETCH_CASES (state, payload) {
    state.fetchCases = payload
  }
}

export const actions = {
  async GET_ALL_CASES ({ commit }) {
    try {
      const response = await this.axios.get('/case')
      if (response.statusText === 'OK') {
        commit('SET_FETCH_CASES', response.data)
      }
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

export const getters = {}
