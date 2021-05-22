import { POST_ALL, POST_DESIGN, POST_DEVELOPMENT, POST_EVENTS, POST_MANAGMENT, POST_TEAM } from './types'

export const state = () => ({
  scrollDirection: null,
  preloaderDone: false,
  mainPageState: true,
  // preloaderDone: true,
  content: {
    phone: '+3 (8093) 93 12 641',
    email: 'hello@boro.com'
  },
  blogFilterType: POST_ALL,
  posts: [
    {
      link: '/blog/posts/1',
      date: '14 April 2021',
      author: {
        img: '',
        name: 'Yehor Haiduk',
        role: 'Author'
      },
      data: {
        img: '/img/blog1.jpg',
        title: 'UX analytics of an online store',
        text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
        readTime: '9min'
      },
      type: [POST_DESIGN, POST_DEVELOPMENT, POST_TEAM],
      tags: ['UI/UX Design', 'Web design']
    },
    {
      link: '/blog/posts/2',
      date: '14 April 2021',
      author: {
        img: '',
        name: 'Yehor Haiduk',
        role: 'Author',
        readTime: '3min'
      },
      data: {
        img: '/img/blog2.jpg',
        title: 'What should be the workplace',
        text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.'
      },
      tags: ['UI/UX Design', 'Web design'],
      type: [POST_DESIGN, POST_MANAGMENT]
    },
    {
      link: '/blog/posts/3',
      date: '14 April 2021',
      author: {
        img: '',
        name: 'Yehor Haiduk',
        role: 'Author',
        readTime: '3min'
      },
      data: {
        img: '/img/blog3.jpg',
        title: 'Developer\'s corporate website design',
        text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.'
      },
      tags: ['UI/UX Design', 'Web design'],
      type: [POST_DESIGN, POST_EVENTS]
    },
    {
      link: '/blog/posts/4',
      date: '14 April 2021',
      author: {
        img: '',
        name: 'Yehor Haiduk',
        role: 'Author'
      },
      data: {
        img: '/img/blog1.jpg',
        title: 'UX analytics of an online store',
        text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
        readTime: '9min'
      },
      type: [POST_DESIGN, POST_DEVELOPMENT, POST_TEAM],
      tags: ['UI/UX Design', 'Web design']
    },
    {
      link: '/blog/posts/5',
      date: '14 April 2021',
      author: {
        img: '',
        name: 'Yehor Haiduk',
        role: 'Author',
        readTime: '3min'
      },
      data: {
        img: '/img/blog2.jpg',
        title: 'What should be the workplace',
        text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.'
      },
      tags: ['UI/UX Design', 'Web design'],
      type: [POST_DESIGN, POST_MANAGMENT]
    },
    {
      link: '/blog/posts/6',
      date: '14 April 2021',
      author: {
        img: '',
        name: 'Yehor Haiduk',
        role: 'Author',
        readTime: '3min'
      },
      data: {
        img: '/img/blog3.jpg',
        title: 'Developer\'s corporate website design',
        text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.'
      },
      tags: ['UI/UX Design', 'Web design'],
      type: [POST_DESIGN, POST_EVENTS]
    },
    {
      link: '/blog/posts/7',
      date: '14 April 2021',
      author: {
        img: '',
        name: 'Yehor Haiduk',
        role: 'Author'
      },
      data: {
        img: '/img/blog1.jpg',
        title: 'UX analytics of an online store',
        text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
        readTime: '9min'
      },
      type: [POST_DESIGN, POST_DEVELOPMENT, POST_TEAM],
      tags: ['UI/UX Design', 'Web design']
    },
    {
      link: '/blog/posts/8',
      date: '14 April 2021',
      author: {
        img: '',
        name: 'Yehor Haiduk',
        role: 'Author',
        readTime: '3min'
      },
      data: {
        img: '/img/blog2.jpg',
        title: 'What should be the workplace',
        text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.'
      },
      tags: ['UI/UX Design', 'Web design'],
      type: [POST_DESIGN, POST_MANAGMENT]
    },
    {
      link: '/blog/posts/9',
      date: '14 April 2021',
      author: {
        img: '',
        name: 'Yehor Haiduk',
        role: 'Author',
        readTime: '3min'
      },
      data: {
        img: '/img/blog3.jpg',
        title: 'Developer\'s corporate website design',
        text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.'
      },
      tags: ['UI/UX Design', 'Web design'],
      type: [POST_DESIGN, POST_EVENTS]
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
  SET_MAIN_PAGE_STATE (s, payload) {
    s.mainPageState = payload
  },
  SET_POST_TYPE (s, payload) {
    s.blogFilterType = payload
  }
}

export const actions = {
  DISPATCH_PRELOAD_STATE ({ commit }) {
    commit('SET_MAIN_PAGE_STATE', false)
    setTimeout(() => {
      commit('SET_PRELOADER_STATE', true)
      commit('SET_MAIN_PAGE_STATE', true)
    }, 1400)
  }
}

export const getters = {}
