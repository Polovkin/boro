
import { TAG_ALL } from './types'

export const state = () => ({
  filterType: TAG_ALL
})

export const mutations = {

  SET_FILTER_TYPE (s, payload) {
    s.filterType = payload
  }
}

export const actions = {

}

export const getters = {}
