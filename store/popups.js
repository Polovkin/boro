import { POPUP_GET_IN_TOUCH, MENU, POPUP_ESTIMATE } from './types'

const openDelay = 100
const animationsDuration = 1500
const closeDelay = 1200

export const state = () => ({
  popupState: false,
  menuState: null,
  menuAnimationClass: false,
  popupAnimationClass: false,
  menuAnimationInProgress: false,
  popupType: POPUP_GET_IN_TOUCH
})

export const mutations = {
  SET_POPUP_STATE (s, payload) {
    s.popupState = payload
  },
  SET_MENU_STATE (s, payload) {
    s.menuState = payload
  },
  SET_MENU_ANIMATION_CLASS (s, payload) {
    s.menuAnimationClass = payload
  },
  SET_POPUP_ANIMATION_CLASS (s, payload) {
    s.popupAnimationClass = payload
  },
  SET_SCROLL_DIRECTION (s, payload) {
    s.scrollDirection = payload
  },
  SET_POPUP_TYPE (s, payload) {
    s.popupType = payload
  },
  SET_MENU_ANIMATION_PROGRESS (s, payload) {
    s.menuAnimationInProgress = payload
  }
}

export const actions = {
  OPEN_MODAL ({ commit, state }) {
    if (state.popupType !== MENU) {
      commit('SET_POPUP_STATE', true)
      commit('SET_MENU_ANIMATION_PROGRESS', true)
      setTimeout(() => {
        commit('SET_POPUP_ANIMATION_CLASS', true)
      }, openDelay)
      setTimeout(() => {
        commit('SET_MENU_ANIMATION_PROGRESS', false)
      }, animationsDuration)
    }
    commit('SET_MENU_STATE', true)
    commit('SET_MENU_ANIMATION_PROGRESS', true)
    setTimeout(() => {
      commit('SET_MENU_ANIMATION_CLASS', true)
    }, openDelay)
    setTimeout(() => {
      commit('SET_MENU_ANIMATION_PROGRESS', false)
    }, animationsDuration)
  },
  CLOSE_MODAL ({ commit, state }) {
    if (state.popupType !== MENU) {
      commit('SET_POPUP_ANIMATION_CLASS', false)
      commit('SET_MENU_ANIMATION_PROGRESS', true)
      setTimeout(() => {
        commit('SET_POPUP_STATE', false)
        commit('SET_MENU_ANIMATION_PROGRESS', false)
      }, closeDelay)
    }
    commit('SET_MENU_ANIMATION_CLASS', false)
    commit('SET_MENU_ANIMATION_PROGRESS', true)
    setTimeout(() => {
      commit('SET_MENU_STATE', false)
      commit('SET_MENU_ANIMATION_PROGRESS', false)
    }, closeDelay)
  }

}

export const getters = {}
