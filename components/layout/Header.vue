<template>
  <header
    ref="header"
    class="header"
    :class="{
      'header--base': isPreloaderDone,
      'header--on-top': isHeaderOnTop,
      'header--animate animation-base-state': isPreloaderDone && !isHeaderMove}"
  >
    <div class="container">
      <div class="header__content">
        <div class="header__wrap header__wrap-left">
          <Logo class="header__logo" />
          <LayoutNav class="header__navigation" />
        </div>
        <div class="header__wrap header__wrap-right">
          <LangSwitcher />

          <ButtonPrimary is-popup-toggle>
            {{ $t('header.link') }}
          </ButtonPrimary>

          <button v-show="!isHeaderOnTop" class="header__menu-toggle" @click="openMenu">
            menu
            <span class="burger" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '../reusable/Logo'
import Navigation from '../reusable/Navigation'
import LangSwitcher from '../LangSwitcher'
import LayoutNav from '../reusable/LayoutNav'
import ButtonPrimary from '../reusable/ButtonPrimary'
import { POPUP_GET_IN_TOUCH, POPUP_MENU } from '../../store/types'

export default {
  name: 'Header',
  components: { ButtonPrimary, LayoutNav, LangSwitcher, Navigation, Logo },
  data () {
    return {
      firstLoad: false,
      popupCalledType: POPUP_GET_IN_TOUCH,
      scale: false
    }
  },
  computed: {
    ...mapState({
      scrollDirection: s => s.app.scrollDirection,
      headerTopState: s => s.app.headerTopState,
      headerMove: s => s.app.headerMove,
      preloaderDone: s => s.app.preloaderDone
    }),
    isPreloaderDone () {
      return this.preloaderDone
    },
    isHeaderOnTop () {
      return this.headerTopState
    },
    isHeaderMove () {
      return this.headerMove
    }
  },
  mounted () {
    this.firstLoad = true
  },
  methods: {
    openMenu () {
      this.$store.commit('app/SET_POPUP_STATE', true)
      this.$store.commit('app/SET_POPUP_TYPE', POPUP_MENU)
    }
  }
}
</script>

<style lang="scss">

</style>
