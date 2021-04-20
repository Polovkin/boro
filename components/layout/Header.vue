<template>
  <header ref="header"
          class="header"
          :class="{'header--scrolling': isHeaderBaseState,'animation-base-state': isPreloaderDone}">
    <div class="container">
      <div class="header__content">
        <div class="header__wrap">
          <Logo class="header__logo"/>
          <LayoutNav class="header__navigation"/>
        </div>
        <div class="header__wrap">
          <LangSwitcher/>
          <ButtonPrimary>{{ $t('header.link') }}</ButtonPrimary>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
import Logo from "../reusable/Logo";
import Navigation from "../reusable/Navigation";
import LangSwitcher from "../LangSwitcher";
import LayoutNav from "../reusable/LayoutNav";
import ButtonPrimary from "../reusable/ButtonPrimary";
import {mapState} from 'vuex'

export default {
  name: "Header",
  components: {ButtonPrimary, LayoutNav, LangSwitcher, Navigation, Logo},
  data() {
    return {
      firstLoad: false
    }
  },
  computed: {
    ...mapState({
      scrollDirection: s => s.app.scrollDirection,
      headerBaseState: s => s.app.headerBaseState,
      preloaderDone: s => s.app.preloaderDone,
    }),
    isPreloaderDone() {
      return this.preloaderDone
    },
    isScrollDown() {
      return this.scrollDirection
    },
    isHeaderBaseState() {
      return this.headerBaseState
    }
  },
  mounted() {
    this.firstLoad = true
  }
}
</script>

<style lang="scss">

</style>
