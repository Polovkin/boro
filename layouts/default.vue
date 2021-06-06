<template>
  <div class="app">
    <PopupFluid />
    <Menu />
    <Header />
    <LocomotiveScroll
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
    </LocomotiveScroll>
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
      locomotiveOptions: {
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
      }
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.popupActive
      }
    }
  },

  computed: {
    ...mapState({
      popupState: s => s.popups.popupState,
      menu: s => s.popups.menuState
    }),
    popupActive () {
      return this.popupState || this.menu ? 'js-active-popup' : ''
    }
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
