<template>
  <div
    v-show="isShow"
    v-in-viewport
    class="popup"
    :class="{'popup__light': isLight}"
  >
    <div class="container">
      <div class="popup__header">
        <Logo :is-light="!isLight" />
        <button
          class="popup__header-close"
          @click="closePopup"
        >
          Close
          <span class="popup__header-cross" />
        </button>
        <div class="divider" />
      </div>
    </div>
    <div class="popup__content">
      <slot />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '../reusable/Logo'

export default {
  name: 'PopupFluid',
  components: { Logo },
  props: {
    isLight: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapState({
      popupState: s => s.app.popupState
    }),
    isShow () {
      return this.popupState
    }
  },
  methods: {
    closePopup () {
      this.$store.commit('app/SET_POPUP_STATE')
    }
  }
}
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: z(modal);

  width: 100vw;
  height: 100vh;

  background-color: $color__dark;

  transform: translate(-50%, -50%);

  &__header {
    align-items: center;
    justify-content: space-between;

    position: relative;

    display: flex;

    padding: 20px 0;

    &-close {

      @include title-link;
      align-items: center;

      display: flex;

      color: $color__light;
    }

    &-cross {

      @include cross(40px, 16px, 1px, $color__light);
      position: relative;

      margin-left: 12px;

      border: 1px solid $color__light_6;
      border-radius: 50%;
    }

    .divider {
      position: absolute;
      bottom: 0;

      background-color: $color__light_6;
    }
  }

}
</style>
