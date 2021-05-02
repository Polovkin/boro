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
                @click="closePopup"
              >
                Close
                <span class="popup__header-cross" />
              </button>
            </div>
          </div>
        </div>
        <div class="header-menu__body">
          content
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
import PopupHeader from './Popup/PopupHeader'
import PopupFooter from './Popup/PopupFooter'
import ButtonPrimary from "../reusable/buttons/ButtonPrimary";
export default {
  name: 'Menu',
  components: {ButtonPrimary, Logo, PopupFooter, PopupHeader },
  data () {
    return {
      type: MENU
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
    closePopup () {
      this.$store.commit('app/SET_MENU_STATE', false)
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/components/layout/header-menu";
</style>
