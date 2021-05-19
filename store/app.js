export const state = () => ({
  scrollDirection: null,
  preloaderDone: false,
  // preloaderDone: true,
  content: {
    phone: '+3 (8093) 93 12 641',
    email: 'hello@boro.com'
  }
})

export const mutations = {
  SET_SCROLL_DIRECTION (s, payload) {
    s.scrollDirection = payload
  },
  SET_PRELOADER_STATE (s, payload) {
    s.preloaderDone = payload
  }

}

export const actions = {
  SET_PRELOAD_STATE ({ commit, state }) {
    setTimeout(() => {
      commit('SET_PRELOADER_STATE', true)
    }, 1400)
  }
}

export const getters = {}
