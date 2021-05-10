<template>
  <div
    v-locomotive="{ options }"
    class="js-locomotive"
  >
    <slot />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LocomotiveScroll',
  directives: {
    locomotive: {
      inserted (el, binding, vnode) {
        vnode.context.locomotive = new vnode.context.LocomotiveScroll({
          el,
          ...binding.value.options
        })
        vnode.context.locomotive.on('scroll', (e) => {
          vnode.context.onScroll(e)
          vnode.context.$emit('scroll')
        })
        vnode.context.$emit('init')
      },
      unbind (el, binding, vnode) {
        vnode.context.locomotive.destroy()
        vnode.context.locomotive = undefined
      }
    }
  },
  props: {
    gettedOptions: {
      type: Object,
      default: () => {
      }
    }
  },
  data: () => ({
    locomotive: undefined,
    defaultOptions: {
      smooth: true
    },
    lastY: 0
  }),
  computed: {
    ...mapState({
      scrollDirection: s => s.app.scrollDirection,
      headerTopState: s => s.header.headerTopState,
      headerMove: s => s.header.headerMove
    }),
    options () {
      return { ...this.defaultOptions, ...this.gettedOptions }
    }
  },
  /**
   *  You can remove mounted hook if you don't needs custom updates
   *  Call this.$nuxt.$emit('update-locomotive') wherever you want
   */
  mounted () {
    this.$nuxt.$on('update-locomotive', () => {
      this?.locomotive?.update()
    })
    this.$nuxt.$on('scroll-locomotive', (data) => {
      this.locomotive.scrollTo(data.target, data.options)
    })
  },
  methods: {
    getScrollDirection (e) {
      const steps = e.scroll.y >= this.lastY
      if (this.scrollDirection !== steps) {
        this.$store.commit('app/SET_SCROLL_DIRECTION', steps)
      }
      if (this.headerMove !== (e.scroll.y > 100 && steps)) {
        this.$store.commit('header/SET_HEADER_MOVE', e.scroll.y > 100 && steps)
      }
      if (this.headerTopState !== (e.scroll.y < 150)) {
        this.$store.commit('header/SET_HEADER_TOP_STATE', e.scroll.y < 150)
      }

      this.lastY = e.scroll.y
    },
    onScroll (e) {
      if (typeof this.$store._mutations['app/setScroll'] !== 'undefined') {
        this.$store.commit('app/setScroll', {
          isScrolling: this.locomotive.scroll.isScrolling,
          limit: { ...e.limit },
          ...e.scroll // x, y
        })
      }
      this.getScrollDirection(e)
    }
  }
}
</script>

<style lang="scss">
.has-scroll-smooth body{
  overflow: hidden;
}

.has-scroll-smooth .js-locomotive {
  min-height: 100%;
  width: 100%;
}
</style>
