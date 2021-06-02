import posts from '../api/data'
import user from '../api/user'
import cases from '../api/cases'
import socials from '../api/socials'
import { CASE_ALL, POST_ALL } from './types'

export const state = () => ({
  scrollDirection: null,
  mainSlide: 0,
  mainPageState: true,
  preloaderDone: process.env.IS_DEVELOP === 'true',
  navigation: [
    { name: 'navigation.link1', link: '/cases' }, // cases
    { name: 'navigation.link2', link: '/' }, // services
    { name: 'navigation.link3', link: '/' }, // about
    { name: 'navigation.link4', link: '/' }, // how we work
    { name: 'navigation.link5', link: '/blog' }, // blog
    { name: 'navigation.link6', link: '/contacts' } // contacts
  ],
  terms: [
    { name: 'footer.privacy', link: '/privacy' }, // privacy
    { name: 'footer.terms', link: '/terms' } // terms
  ],
  content: {
    phone: '+3 (8093) 93 12 641',
    email: 'hello@boro.com'
  },
  blogFilterType: POST_ALL,
  caseFilterType: CASE_ALL,
  user,
  socials,
  cases,
  posts
})

export const mutations = {
  SET_SCROLL_DIRECTION (s, payload) {
    s.scrollDirection = payload
  },
  SET_ACTIVE_SLIDE (s) {
    s.mainSlide = s.mainSlide === 4 ? 0 : s.mainSlide + 1
  },
  SET_PRELOADER_STATE (s, payload) {
    s.preloaderDone = payload
  },
  SET_MAIN_PAGE_STATE (s, payload) {
    s.mainPageState = payload
  },
  SET_POST_TYPE (s, payload) {
    s.blogFilterType = payload
  },
  SET_CASE_TYPE (s, payload) {
    s.blogFilterType = payload
  }
}

export const actions = {
  DISPATCH_MAIN_SLIDER ({ commit }) {
    setInterval(() => {
      commit('SET_ACTIVE_SLIDE')
    }, 5000)
  },
  DISPATCH_PRELOAD_STATE ({ commit }) {
    commit('SET_MAIN_PAGE_STATE', false)
    setTimeout(() => {
      commit('SET_PRELOADER_STATE', true)
      commit('SET_MAIN_PAGE_STATE', true)
    }, 1400)
  }
}

export const getters = {}
