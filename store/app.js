export const state = () => ({
    scrollDirection: null,
    headerBaseState: false,
    preloaderDone: false,
})

export const mutations = {
    SET_SCROLL_DIRECTION(s, payload) {
        s.scrollDirection = payload
    },
    SET_HEADER_BASE_STATE(s, payload) {
        s.headerBaseState = payload
    },
    SET_PRELOADER_STATE(s, payload) {
        s.preloaderDone = payload
        console.log(s.preloaderDone);
    }
}

export const actions = {}

export const getters = {}
