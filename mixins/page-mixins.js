export const pageMixin = {
  data () {
    return {
      scrollOpt: {
        target: '#top',
        options: {
          callback: () => {
            this.$nuxt.$emit('update-locomotive')
          }
        }
      }
    }
  },
  mounted () {
    this.$store.commit('app/SET_PRELOADER_STATE', true)
    this.$nuxt.$emit('update-locomotive')
    setTimeout(() => {
      this.$nuxt.$emit('scroll-locomotive', this.scrollOpt)
    }, 0)
    //
  }
}
