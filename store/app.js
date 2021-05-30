import data from '../data'
import {
  POST_ALL,
  POST_DESIGN,
  POST_DEVELOPMENT,
  POST_EVENTS,
  POST_MANAGMENT,
  POST_TEAM
} from './types'
export const state = () => ({
  scrollDirection: null,
  mainSlide: 0,
  mainPageState: true,
  preloaderDone: process.env.IS_DEVELOP === 'true',
  // preloaderDone: true,
  content: {
    phone: '+3 (8093) 93 12 641',
    email: 'hello@boro.com'
  },
  user: {
    data: {
      img: '/img/anna.jpg',
      role: 'user.account-manager',
      name: 'Anna Haiduk'
    },
    socials: [
      {
        name: 'Viber',
        icon: 'facebook.png',
        link: '/'
      },
      {
        name: 'WhatsApp',
        icon: 'facebook.png',
        link: '/'
      },
      {
        name: 'Telegram',
        icon: 'facebook.png',
        link: '/'
      }
    ]
  },
  socials: [
    {
      name: 'Instagram',
      icon: 'instagram.png',
      link: 'https://www.instagram.com/boro_uiux/'
    },
    {
      name: 'youtube',
      icon: 'youtube.png',
      link: 'https://www.youtube.com/c/BoroUIUX'
    },
    {
      name: 'facebook',
      icon: 'facebook.png',
      link: 'https://www.facebook.com/Egor.Gajduk/ '
    },
    {
      name: 'behance',
      icon: 'behance.png',
      link: 'https://www.behance.net/boro_uiux'
    },
    {
      name: 'Dribble',
      icon: 'dribble.png',
      link: 'https://dribbble.com/boro_uiux'
    }
  ],
  blogFilterType: POST_ALL,
  posts: data
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
