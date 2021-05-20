export const pageMixin = {
  data () {
    return {
      scrollOpt: {
        target: '#top',
        options: ''
      }
    }
  },
  mounted () {
    this.$store.commit('app/SET_PRELOADER_STATE', true)
    this.$nuxt.$emit('update-locomotive')
    this.$nuxt.$emit('scroll-locomotive', this.scrollOpt)
  }
}