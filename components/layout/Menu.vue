<template>
  <div
    v-show="menuState"
    v-in-viewport
    class="header-menu popup--light"
    :class="{
      'header-menu--active':menuAnimationClass,
      'header-menu--animation-in-progress':menuAnimationInProgress}"
  >
    <div class="container">
      <div class="header-menu__body">
        <nav class="header-menu__nav">
          <ul
            :class="{'header-menu__nav--hover': hoverList}"
            @mouseover="listHoverIn"
            @mouseleave="listHoverOut"
          >
            <li
              v-for="(item,index) of navs"
              :key="index"
              class="header-menu__elem"
            >
              <a
                class="header-menu__item"
                @click.prevent="redirect(item.link)"
              >
                {{ $t(item.name) }}
                <span>{{ `0${index + 1}` }}</span>
              </a>
            </li>
          </ul>
        </nav>

        <ul
          class="header-menu__links"
        >
          <li class="header-menu__links-item">
            <div class="header-menu__links-wrap">
              <LinkPrimary is-static link="/">
                {{ $t('footer.privacy') }}
              </LinkPrimary>
            </div>
          </li>
          <li class="header-menu__links-item">
            <div class="header-menu__links-wrap">
              <LinkPrimary is-static link="/">
                {{ $t('footer.terms') }}
              </LinkPrimary>
            </div>
          </li>
        </ul>
        <div class="header-menu__popups">
          <LangSwitcher />
          <ButtonPrimary is-popup-toggle>
            {{ $t('buttons.call-form') }}
          </ButtonPrimary>
        </div>
      </div>
      <PopupFooter is-light />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { MENU } from '../../store/types'

import LinkPrimary from '../reusable/LinkPrimary'
import ButtonPrimary from '../reusable/buttons/ButtonPrimary'
import LangSwitcher from '../LangSwitcher'
import blog from '../../pages/blog'
import PopupFooter from './Popup/PopupFooter'

export default {
  name: 'Menu',
  components: { LangSwitcher, ButtonPrimary, LinkPrimary, PopupFooter },
  data () {
    return {
      type: MENU,
      hoverList: false,
      navs: [
        { name: 'navigation.link1', link: '/' },
        { name: 'navigation.link2', link: '/' },
        { name: 'navigation.link3', link: '/' },
        { name: 'navigation.link4', link: '/' },
        { name: 'navigation.link5', link: '/blog' },
        { name: 'navigation.link6', link: '/contacts' }
      ]
    }
  },
  computed: {
    ...mapState({
      menu: s => s.popups.menuState,
      menuAnimation: s => s.popups.menuAnimationClass,
      animationProgress: s => s.popups.menuAnimationInProgress
    }),
    menuAnimationInProgress () {
      return this.animationProgress
    },
    menuAnimationClass () {
      return this.menuAnimation
    },
    menuState () {
      return this.menu
    }
  },
  methods: {
    redirect (link) {
      this.$router.push(link)
      this.$store.dispatch('popups/MENU_REDIRECT')
    },
    listHoverIn () {
      this.hoverList = true
    },
    listHoverOut () {
      this.hoverList = false
    }

  }
}
</script>

<style lang="scss">
@import "/assets/scss/components/layout/header-menu";
</style>
