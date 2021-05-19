import { FILTER_ALL, FILTER_DESIGN, FILTER_DEVELOPMENT, FILTER_EVENTS, FILTER_MANAGMENT, FILTER_TEAM } from './types'

export const state = () => ({
  scrollDirection: null,
  preloaderDone: false,
  // preloaderDone: true,
  content: {
    phone: '+3 (8093) 93 12 641',
    email: 'hello@boro.com'
  },
  blogFilterType: FILTER_ALL,
  posts: [
    {
      img: '/img/blog1.jpg',
      title: 'UX analytics of an online store',
      date: '14 April 2021',
      tags: ['UI/UX Design', 'Web design'],
      text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
      link: '/',
      type: [FILTER_DESIGN, FILTER_DEVELOPMENT, FILTER_TEAM]
    },
    {
      img: '/img/blog2.jpg',
      title: 'What should be the workplace',
      date: '14 April 2021',
      tags: ['UI/UX Design', 'Web design'],
      text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
      link: '/',
      type: [FILTER_DESIGN, FILTER_MANAGMENT]
    },
    {
      img: '/img/blog3.jpg',
      title: 'Developer\'s corporate website design',
      date: '14 April 2021',
      tags: ['UI/UX Design', 'Web design'],
      text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
      link: '/',
      type: [FILTER_DESIGN, FILTER_EVENTS]
    },
    {
      img: '/img/blog1.jpg',
      title: 'UX analytics of an online store',
      date: '14 April 2021',
      tags: ['UI/UX Design', 'Web design'],
      text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
      link: '/',
      type: [FILTER_DESIGN]
    },
    {
      img: '/img/blog2.jpg',
      title: 'What should be the workplace',
      date: '14 April 2021',
      tags: ['UI/UX Design', 'Web design'],
      text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
      link: '/',
      type: [FILTER_DESIGN, FILTER_EVENTS]
    },
    {
      img: '/img/blog3.jpg',
      title: 'Developer\'s corporate website design',
      date: '14 April 2021',
      tags: ['UI/UX Design', 'Web design'],
      text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
      link: '/',
      type: [FILTER_DESIGN, FILTER_MANAGMENT]
    },
    {
      img: '/img/blog1.jpg',
      title: 'UX analytics of an online store',
      date: '14 April 2021',
      tags: ['UI/UX Design', 'Web design'],
      text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
      link: '/',
      type: [FILTER_MANAGMENT]
    },
    {
      img: '/img/blog2.jpg',
      title: 'What should be the workplace',
      date: '14 April 2021',
      tags: ['UI/UX Design', 'Web design'],
      text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
      link: '/',
      type: [FILTER_MANAGMENT, FILTER_EVENTS]
    },
    {
      img: '/img/blog3.jpg',
      title: 'Developer\'s corporate website design',
      date: '14 April 2021',
      tags: ['UI/UX Design', 'Web design'],
      text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
      link: '/',
      type: [FILTER_MANAGMENT, FILTER_EVENTS]
    }
  ]
})

export const mutations = {
  SET_SCROLL_DIRECTION (s, payload) {
    s.scrollDirection = payload
  },
  SET_PRELOADER_STATE (s, payload) {
    s.preloaderDone = payload
  },
  SET_FILTER_TYPE (s, payload) {
    s.blogFilterType = payload
  }
}

export const actions = {
  SET_PRELOAD_STATE ({ commit, state }) {
    setTimeout(() => {
      commit('SET_PRELOADER_STATE', true)
    }, 1400)
  }
}

export const getters = {}
