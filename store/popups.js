import { POPUP_GET_IN_TOUCH } from './types'

export const state = () => ({
  popupState: false,
  menuState: false,
  menuAnimationClass: false,
  menuAnimationInProgress: false,
  popupType: POPUP_GET_IN_TOUCH
})

export const mutations = {
  SET_POPUP_STATE (s, payload) {
    if (payload === undefined) {
      s.popupState = !s.popupState
    } else {
      s.popupState = payload
    }
  },
  SET_MENU_STATE (s, payload) {
    s.menuState = payload
  },
  SET_MENU_ANIMATION_PROGRESS (s, payload) {
    s.menuAnimationInProgress = payload
  },
  SET_MENU_ANIMATION_CLASS (s, payload) {
    s.menuAnimationClass = payload
  },
  SET_SCROLL_DIRECTION (s, payload) {
    s.scrollDirection = payload
  },
  SET_POPUP_TYPE (s, payload) {
    s.popupType = payload
  }
}

export const actions = {
  START_MENU_ANIMATION ({ commit }) {
    commit('SET_MENU_ANIMATION_PROGRESS', true)
    setTimeout(() => {
      commit('SET_MENU_ANIMATION_PROGRESS', false)
    }, 1000)
  },
  OPEN_MENU ({ commit }) {
    commit('SET_MENU_STATE', true)
    setTimeout(() => {
      commit('SET_MENU_ANIMATION_CLASS', true)
    }, 0)
  },
  CLOSE_MENU ({ commit }) {
    commit('SET_MENU_ANIMATION_CLASS', false)
    setTimeout(() => {
      commit('SET_MENU_STATE', false)
    }, 1500)
  }
}

export const getters = {}
