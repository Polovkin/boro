export const pageMixin = {
  data () {
    return {
      /* scrollOpt: {
        target: "#top",
        options: {
          callback: () => {
            this.$nuxt.$emit("update-locomotive");
          },
        },
      }, */
    }
  },
  mounted () {
    if (!(this.$route.path === '/' || this.$route.path === '/ru' || this.$route.path === '/ru/')) {
      this.$store.commit('app/SET_PRELOADER_STATE', true)
    }
    /* this.$store.commit('app/SET_PRELOADER_STATE', true)
    this.$nuxt.$emit('update-locomotive')
    setTimeout(() => {
      this.$nuxt.$emit('scroll-locomotive', this.scrollOpt)
    }, 0) */
    //
  }
}
