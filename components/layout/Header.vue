<template>
  <header
    ref="header"
    class="header"
    :class="{
      'header--base': isPreloaderDone,
      'header--on-top': isHeaderOnTop,
      'animation-base-state': (isPreloaderDone && !isHeaderMove) || isPopupsOpen}"
  >
    <div class="container">
      <div class="header__content">
        <div class="header__wrap header__wrap-left">
          <Logo class="header__logo" />
          <LayoutNav class="header__navigation" />
        </div>
        <div class="header__wrap header__wrap-right">
          <transition name="fade">
            <LangSwitcher v-show="isHeaderOnTop" />
          </transition>
          <ButtonPrimary is-popup-toggle>
            {{ $t('buttons.call-form') }}
          </ButtonPrimary>
          <MenuBurger :class="{'menu-burger--show': !isHeaderOnTop}" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '../reusable/Logo'
import LangSwitcher from '../LangSwitcher'
import LayoutNav from '../reusable/LayoutNav'
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
    }
  },
  mounted () {
    this.firstLoad = true
  }

}
</script>

<style lang="scss">

</style>
