import { mapState } from 'vuex'
import { TAG_ALL } from '../store/types'

export const slugMixin = {
  data () {
    return {
      item: null,
      itemHeight: 0,
      activeItems: false,
      itemsQuantity: 0
    }
  },

  computed: {
    ...mapState({
      filterType: s => s.filter.filterType
    })
  },
  mounted () {
    this.$store.commit('filter/SET_FILTER_TYPE', TAG_ALL)
  },
  watch: {
    filterType () {
      this.activeItems = false
      this.$nextTick(() => {
        this.itemsQuantity = this.item.length
      })
    }
  },
  methods: {
    scrollToFilter () {
      const el = document.querySelector('#page_filter')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 410)
      }
    }
  }
}
