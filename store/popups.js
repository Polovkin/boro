import {POPUP_GET_IN_TOUCH, MENU, POPUP_ESTIMATE} from './types';

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
    const openDelay = 100
    switch (state.popupType) {
      case POPUP_ESTIMATE:
        commit('SET_POPUP_STATE', true)
        setTimeout(() => {
          commit('SET_POPUP_ANIMATION_CLASS', true)
        }, openDelay)
        break
      case POPUP_GET_IN_TOUCH:
        commit('SET_POPUP_STATE', true)
        setTimeout(() => {
          commit('SET_POPUP_ANIMATION_CLASS', true)
        }, openDelay)
        break
      case MENU:
        commit('SET_MENU_STATE', true)
        setTimeout(() => {
          commit('SET_MENU_ANIMATION_CLASS', true)
        }, openDelay)
        break
      default:
        return null
    }
  },
  CLOSE_MODAL ({ commit, state }) {
    const closeDelay = 1200
    switch (state.popupType) {
      case POPUP_ESTIMATE:
        commit('SET_POPUP_ANIMATION_CLASS', false)
        setTimeout(() => {
          commit('SET_POPUP_STATE', false)
        }, closeDelay)
        break
      case POPUP_GET_IN_TOUCH:
        commit('SET_POPUP_ANIMATION_CLASS', false)
        setTimeout(() => {
          commit('SET_POPUP_STATE', false)
        }, closeDelay)
        break
      case MENU:
        commit('SET_MENU_ANIMATION_CLASS', false)
        setTimeout(() => {
          commit('SET_MENU_STATE', false)
        }, closeDelay)
        break
      default:
        return null
    }
  }

}

export const getters = {}
