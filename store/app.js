import { POPUP_GET_IN_TOUCH } from './types'

export const state = () => ({
  scrollDirection: null,
  headerBaseState: false,
  // preloaderDone: false
  preloaderDone: true,
  popupState: true,
  popupType: POPUP_GET_IN_TOUCH
})

export const mutations = {
  SET_SCROLL_DIRECTION (s, payload) {
    s.scrollDirection = payload
  },
  SET_POPUP_STATE (s, payload) {
    if (payload === undefined) {
      s.popupState = !s.popupState
    } else {
      s.popupState = payload
    }
  },
  SET_POPUP_TYPE (s, payload) {
    s.popupState = payload
  },
  SET_HEADER_BASE_STATE (s, payload) {
    s.headerBaseState = payload
  },
  SET_PRELOADER_STATE (s, payload) {
    s.preloaderDone = payload
  }
}

export const actions = {}

export const getters = {}
