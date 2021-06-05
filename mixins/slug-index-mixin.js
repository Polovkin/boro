import { TAG_ALL } from '../store/types'

export const slugMixin = {
  data () {
    return {
      isShowMore: false
    }
  },
  watch: {
    filteredItems (newValue, oldValue) {
      if (newValue !== oldValue) {
        setTimeout(() => {
          this.$nuxt.$emit('update-locomotive')
        }, 0)
      }
    }
  },
  mounted () {
    this.$store.commit('filter/SET_FILTER_TYPE', TAG_ALL)
  },
  methods: {
    showMore () {
      this.isShowMore = !this.isShowMore
      setTimeout(() => {
        this.$nuxt.$emit('update-locomotive')
        const data = {
          target: '.blog__filter',
          options: ''
        }
        if (!this.isShowMore) {
          this.$nuxt.$emit('scroll-locomotive', data)
        }
      }, 500)
    }
  }
}
