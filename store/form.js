export const state = () => ({
  customDropdownState: false,
})

export const mutations = {
  CLOSE_CUSTOM_DROPDOWN (s, payload) {
    s.customDropdownState = payload
  },
  SET_SUCCESS_STATE (s, payload) {
    s.success = payload
  }
}

export const actions = {
  async SEND_FORM ({ commit }, data) {
    try {
      const response = await this.$axios('/form', {
        method: 'POST',
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
      return response.statusText === 'OK'
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

export const getters = {}
