export const state = () => ({
  scrollDirection: null,
  // preloaderDone: false,
  preloaderDone: true

})

export const mutations = {
  SET_SCROLL_DIRECTION (s, payload) {
    s.scrollDirection = payload
  },
  SET_PRELOADER_STATE (s, payload) {
    s.preloaderDone = payload
  }

}

export const actions = {}

export const getters = {}
