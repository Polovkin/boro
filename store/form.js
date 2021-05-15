
export const state = () => ({
  customDropdownState: false
})

export const mutations = {
  CLOSE_CUSTOM_DROPDOWN (s,payload) {
    s.customDropdownState = payload
    console.log(s.customDropdownState);
  }
}

export const actions = {

}

export const getters = {}
