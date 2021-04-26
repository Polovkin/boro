<template>
  <transition name="slide-fade">
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
        <div class="popup__body">
          <Form />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '../reusable/Logo'
import Form from '../reusable/Form'

export default {
  name: 'PopupFluid',
  components: { Form, Logo },
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
@import 'assets/scss/core/headings';

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, .5, .8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: z(modal);

  width: 100vw;
  height: 100vh;

  background-color: $color__dark;

  transform: translate(-50%, -50%);

  .container {
    flex-direction: column;

    display: flex;
    height: 100%;
  }

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

  &__body {
    flex: 1;
    padding: 42px 0;

    color: $color__light;
  }

  &__title {
    @extend h3;
  }
}
</style>
