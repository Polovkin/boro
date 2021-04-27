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
        <div class="popup__footer">
          <hr class="divider light">
          <div class="popup__wrap">
            <div class="popup__footer-info">
              <p class="popup__footer-item">
                <span>Write</span>
                <span>hello@boro.com</span>
              </p>
              <p class="popup__footer-item">
                <span>Call</span>
                <span> +3 (8093) 93 12 641</span>
              </p>
            </div>
            <FooterTags is-dark />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '../reusable/Logo'
import Form from '../reusable/Form'
import FooterTags from '../reusable/FooterTags'

export default {
  name: 'PopupFluid',
  components: { FooterTags, Form, Logo },
  props: {
    isLight: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tags: [
        {
          name: 'Viber',
          icon: 'facebook.png',
          link: '/'
        },
        {
          name: 'WhatsApp',
          icon: 'facebook.png',
          link: '/'
        },
        {
          name: 'Telegram',
          icon: 'facebook.png',
          link: '/'
        }
      ]
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

.slide-fade-enter-active {
  transition: all .2s ease;
}

.slide-fade-leave-active {
  //transition: all .2s cubic-bezier(1.0, .5, .8, 1.0);
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
  overflow: auto;

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

    display: flex;

    padding-top: 42px;

    color: $color__light;
  }

  &__title {
    @include h3;
  }

  &__footer {
    align-items: center;
    justify-content: space-between;

    display: flex;

    &-info {
      display: flex;
    }

    &-item {
      flex-direction: column;

      display: flex;

      margin-right: 50px;
      margin-bottom: 10px;

      span:first-child {
        @include title-link;
        color: $color__light;
      }

      a {
        @include body-secondary;
        color: $color__font--quaternary;
      }
    }
  }

}
</style>
