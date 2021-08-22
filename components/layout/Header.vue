<template>
  <header
    ref="header"
    class="header"
    :class="{
      'header--base': isPreloaderDone,
      'header--on-top': isHeaderOnTop,
      'header--dark': isDark && !MenuOpen,
      'animation-base-state': (isPreloaderDone && !isHeaderMove) || isPopupsOpen}"
  >
    <div class="container">
      <div class="header__content">
        <div class="header__wrap header__wrap-left">
          <Logo v-if="isDark && !MenuOpen" is-light class="header__logo animation-move-from-right animation-delay-10" />
          <Logo v-else class="header__logo animation-move-from-right animation-delay-10" />
          <LayoutNav class="header__navigation" />
        </div>
        <div class="header__wrap header__wrap-right animation-move-from-left animation-delay-10">
          <LangSwitcher v-show="isHeaderOnTop" />
          <ButtonPrimary v-if="isDark && !MenuOpen" is-light is-popup-toggle>
            {{ $t('buttons.call-form') }}
          </ButtonPrimary>
          <ButtonPrimary v-else is-popup-toggle>
            {{ $t('buttons.call-form') }}
          </ButtonPrimary>
          <MenuBurger :class="{'menu-burger--show': showMenuButton}" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import LayoutNav from '@/components/layout/LayoutNav'
import Logo from '../reusable/Logo'
import LangSwitcher from '../common/LangSwitcher'
import ButtonPrimary from '../reusable/buttons/ButtonPrimary'
import MenuBurger from '../reusable/buttons/MenuBurger'
import { POPUP_ESTIMATE } from '../../store/types'

export default {
  name: 'Header',
  components: { MenuBurger, ButtonPrimary, LayoutNav, LangSwitcher, Logo },
  data () {
    return {
      firstLoad: false,
      scale: false,
      popupType: POPUP_ESTIMATE
    }
  },
  computed: {
    ...mapState({
      scrollDirection: s => s.app.scrollDirection,
      headerTopState: s => s.header.headerTopState,
      headerMove: s => s.header.headerMove,
      preloaderDone: s => s.app.preloaderDone,
      PopupOpen: s => s.popups.popupState,
      MenuOpen: s => s.popups.menuState
    }),
    isMainPage () {
      return this.$route.path === '/' || this.$route.path === '/ru' || this.$route.path === '/ru/'
    },
    isDark () {
      return this.$store.state.header.headerIsDark && this.isMainPage
    },
    isPopupsOpen () {
      return this.PopupOpen || this.MenuOpen
    },
    isPreloaderDone () {
      return this.preloaderDone
    },
    isHeaderOnTop () {
      return this.headerTopState
    },
    isHeaderMove () {
      return this.headerMove
    },
    showMenuButton () {
      return !this.isHeaderOnTop || !this.isMainPage
    }
  },
  mounted () {
    this.firstLoad = true
  }
}

</script>

<style lang="scss">

</style>
