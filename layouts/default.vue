<template>
  <div class="app">
    <Preloader />
    <PopupFluid />
    <Menu />
    <Header />
    <main class="main">
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import PopupFluid from '../components/layout/Popup/PopupFluid'
import Menu from '../components/layout/Menu'
import Preloader from '../components/reusable/Preloader'
import Header from '~/components/layout/Header'

export default {
  components: { Preloader, Menu, PopupFluid, Header },
  data () {
    return {}
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
