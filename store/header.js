export const state = () => ({
  headerMove: false,
  headerTopState: true,
  headerIsDark: true
})

export const mutations = {
  SET_HEADER_MOVE (s, payload) {
    s.headerMove = payload
  },
  SET_HEADER_DARK (s, payload) {
    s.headerIsDark = payload
  },
  SET_HEADER_TOP_STATE (s, payload) {
    s.headerTopState = payload
  }
}

export const actions = {}

export const getters = {}
