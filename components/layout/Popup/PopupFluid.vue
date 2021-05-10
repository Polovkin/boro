<template>
  <div
    v-show="isShow"
    v-in-viewport
    class="popup"
    :class="{'popup--light':isLight,'popup--active':popupAnimationClass}"
  >
    <div class="container">
      <PopupHeader :is-light="isLight" />
      <div class="popup__body animation-delay-2">
        <Form />
      </div>
      <PopupFooter class="animation-delay-4" :is-light="isLight" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Form from '../../reusable/forms/Form'
import { POPUP_GET_IN_TOUCH, POPUP_ESTIMATE, POPUP_SUCCESS } from '../../../store/types'
import PopupFooter from './PopupFooter'
import PopupHeader from './PopupHeader'

export default {
  name: 'PopupFluid',
  components: { PopupHeader, PopupFooter, Form },

  data () {
    return {}
  },
  computed: {
    ...mapState({
      popupState: s => s.popups.popupState,
      popupType: s => s.popups.popupType,
      popupAnimation: s => s.popups.popupAnimationClass
    }),
    popupAnimationClass () {
      return this.popupAnimation
    },
    isShow () {
      return this.popupState
    },
    isLight () {
      return this.popupSuccess
    },
    popupEstimate () {
      return this.popupType === POPUP_ESTIMATE
    },
    popupSuccess () {
      return this.popupType === POPUP_SUCCESS
    },
    popupGetInTouch () {
      return this.popupType === POPUP_GET_IN_TOUCH
    }
  }

}
</script>

<style lang="scss">

</style>
