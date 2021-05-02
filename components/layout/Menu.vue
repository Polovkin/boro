<template>
  <transition name="slide-fade">
    <div
      v-if="menuState"
      v-in-viewport
      class="header-menu popup--light"
    >
      <div class="container">
        <div class="popup__header">
          <div class="popup__header-wrap popup__header-left">
            <Logo />
          </div>
          <div class="popup__header-wrap popup__header-right">
            <div class="popup__header-buttons">
              <ButtonPrimary is-popup-toggle>
                {{ $t('header.link') }}
              </ButtonPrimary>
              <button
                class="popup__header-close"
                @click="closeMenu"
              >
                Close
                <span class="popup__header-cross" />
              </button>
            </div>
          </div>
        </div>
        <div class="header-menu__body">
          <nav class="header-menu__nav">
            <ul>
              <li
                v-for="(item,index) of navs"
                :key="index"
              >
                <nuxt-link
                  class="header-menu__item"
                  :to="item.link"
                >
                  {{ $t(item.name) }}
                  <span>{{ `0${index + 1}` }}</span>
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <ul class="header-menu__links">
            <li>
              <LinkPrimary link="/">
                Privacy policy
              </LinkPrimary>
              <LinkPrimary link="/">
                Terms&Conditions
              </LinkPrimary>
            </li>
          </ul>
        </div>
        <PopupFooter is-light />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import { MENU } from '../../store/types'
import Logo from '../reusable/Logo'
import ButtonPrimary from '../reusable/buttons/ButtonPrimary'
import Navigation from '../reusable/Navigation'
import LinkPrimary from '../reusable/LinkPrimary'
import PopupFooter from './Popup/PopupFooter'

export default {
  name: 'Menu',
  components: { LinkPrimary, Navigation, ButtonPrimary, Logo, PopupFooter },
  data () {
    return {
      type: MENU,
      navs: [
        { name: 'navigation.link1', link: '/' },
        { name: 'navigation.link2', link: '/' },
        { name: 'navigation.link3', link: '/' },
        { name: 'navigation.link4', link: '/' },
        { name: 'navigation.link5', link: '/' },
        { name: 'navigation.link6', link: '/' }
      ]
    }
  },
  computed: {
    ...mapState({
      menu: s => s.app.menuState
    }),
    menuState () {
      return this.menu
    }
  },
  methods: {
    closeMenu () {
      this.$store.commit('app/SET_MENU_STATE', false)
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/components/layout/header-menu";
</style>
