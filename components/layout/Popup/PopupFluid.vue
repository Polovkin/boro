<template>
  <transition name="slide-fade">
    <div
      v-show="isShow"
      v-in-viewport
      class="popup"
      :class="{'popup--light':isLight}"
    >
      <div class="container">
        <PopupHeader :is-light="isLight" />
        <div class="popup__body">
          <Form v-if="popupGetInTouch" />
        </div>
        <PopupFooter :is-light="isLight" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import Form from '../../reusable/Form'
import {POPUP_GET_IN_TOUCH, POPUP_ESTIMATE, POPUP_SUCCESS} from '../../../store/types'
import PopupFooter from './PopupFooter'
import PopupHeader from './PopupHeader'

export default {
  name: 'PopupFluid',
  components: { PopupHeader, PopupFooter, Form },

  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      popupState: s => s.app.popupState,
      popupType: s => s.app.popupType
    }),
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
