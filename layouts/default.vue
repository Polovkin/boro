<template>
  <div class="app">
    <PopupFluid />
    <Menu />
    <Header />
    <main class="main">
      <nuxt />
      <div class="container">
        <Lead />
        <Footer />
      </div>
    </main>
    <!--    <LocomotiveScroll
      ref="scroller"
      data-scroll-container
      :getted-options="locomotiveOptions"
    >
      <main class="main">
        <nuxt />
        <div class="container">
          <Lead />
          <Footer />
        </div>
      </main>
    </LocomotiveScroll>-->
  </div>
</template>

<script>

import { mapState } from 'vuex'
import PopupFluid from '../components/layout/Popup/PopupFluid'
import Menu from '../components/layout/Menu'
import Preloader from '../components/common/Preloader'
import LocomotiveScroll from '../components/layout/LocomotiveScroll'
import Lead from '../components/sections/Lead'
import Footer from '../components/layout/Footer'
import Header from '~/components/layout/Header'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Footer, Lead, LocomotiveScroll, Preloader, Menu, PopupFluid, Header },
  data () {
    return {
      /* locomotiveOptions: {
        smooth: true,
        direction: 'vertical',
        smartphone: {
          smooth: true,
          direction: 'vertical'
        },
        tablet: {
          smooth: true,
          direction: 'vertical'
        }
      }, */
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.popupActive,
        lastY: 0
      }
    }
  },
  methods: {
    onScroll () {
      const blockWidth = window.innerHeight
      const scrollValue = window.pageYOffset
      const steps = scrollValue >= this.lastY
      if (this.scrollDirection !== steps) {
        this.$store.commit('app/SET_SCROLL_DIRECTION', steps)
      }
      if (this.headerMove !== (scrollValue > 100 && steps)) {
        this.$store.commit('header/SET_HEADER_MOVE', scrollValue > 100 && steps)
      }
      if (this.headerTopState !== (scrollValue < 150)) {
        this.$store.commit('header/SET_HEADER_TOP_STATE', scrollValue < 150)
      }
      if (this.headerIsDark !== (scrollValue < blockWidth)) {
        this.$store.commit('header/SET_HEADER_DARK', scrollValue < blockWidth)
      }
      this.lastY = window.pageYOffset
    }
  },
  computed: {
    ...mapState({
      popupState: s => s.popups.popupState,
      scrollDirection: s => s.app.scrollDirection,
      menu: s => s.popups.menuState
    }),
    popupActive () {
      return this.popupState || this.menu ? 'js-active-popup' : ''
    }
  },
  mounted () {
    this.firstLoad = true
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>
<style lang="scss">
@import '~@/assets/scss/_app.scss';
@import '~@/assets/scss/_layout.scss';

.app, .js-active-popup {
  overflow: hidden;
}

</style>
