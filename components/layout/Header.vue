<template>
  <header
    ref="header"
    class="header"
    :class="{
      'header--scrolling': isHeaderMove,
      //'animation-header-hide': false,
      'animation-base-state': isPreloaderDone && !isHeaderMove}"
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
import { POPUP_GET_IN_TOUCH } from '../../store/types'
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
      headerMove: s => s.app.headerMove,
      preloaderDone: s => s.app.preloaderDone
    }),
    isPreloaderDone () {
      return this.preloaderDone
    },
    isHeaderMoveUp () {
      return this.scrollDirection
    },
    isHeaderMove () {
      return this.headerMove
    }
  },
  mounted () {
    this.firstLoad = true
  },
  watch: {
    isHeaderMoveUp(newValue, oldValue) {
      console.log(newValue);
    }
  },
}
</script>

<style lang="scss">

</style>
