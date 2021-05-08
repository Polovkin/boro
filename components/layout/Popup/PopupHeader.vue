<template>
  <div class="popup__header">
    <div class="popup__header-wrap popup__header-left">
      <Logo :is-light="!isLight" />
    </div>
    <div class="popup__header-wrap popup__header-right">
      <div class="popup__header-buttons">
        <button
          class="popup__header-close"
          @click="closePopup"
        >
          {{ $t('header.menu-close') }}
          <span class="popup__header-cross" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { POPUP_GET_IN_TOUCH } from '../../../store/types'
import Logo from '../../reusable/Logo'

export default {
  name: 'PopupHeader',
  components: { Logo },
  props: {
    isLight: {
      type: Boolean,
      default: false
    },
    closeType: {
      type: String,
      default: POPUP_GET_IN_TOUCH
    },
  },
  methods: {
    closePopup () {
      this.$store.dispatch('popups/CLOSE_MODAL')
    }
  }
}
</script>

<style lang="scss">

</style>
