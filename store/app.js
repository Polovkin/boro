export const state = () => ({
    scrollDirection: null,
    headerBaseState: false,
})

export const mutations = {
    SET_SCROLL_DIRECTION(s, payload) {
        s.scrollDirection = payload
    },
    SET_HEADER_BASE_STATE(s, payload) {
        s.headerBaseState = payload
    }
}

export const actions = {}

export const getters = {}
