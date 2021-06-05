<template>
  <button
    class="menu-burger"
    :class="{'menu-burger--active':menuAnimation}"
    @click="menuToggle"
  >
    <span class="menu-burger__text">
      <span>{{ $t('header.menu') }}</span>
      <span>{{ $t('header.menu-close') }}</span>
    </span>
    <span class="burger" />
  </button>
</template>

<script>

import { mapState } from 'vuex'
import { MENU } from '../../../store/types'

export default {
  name: 'MenuBurger',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      menu: s => s.popups.menuState,
      menuAnimation: s => s.popups.menuAnimationClass
    }),

    menuState () {
      return this.menu
    }
  },
  methods: {
    menuToggle () {
      if (this.menuState === null) {
        this.$store.commit('popups/SET_POPUP_TYPE', MENU)
        this.$store.dispatch('popups/OPEN_MODAL')
      } else {
        this.$store.commit('popups/SET_POPUP_TYPE', MENU)
        this.$store.dispatch(this.menuState ? 'popups/CLOSE_MODAL' : 'popups/OPEN_MODAL')
      }
    }
  }

}
</script>

<style lang="scss">

.menu-burger {
  $show_duration: .8s;
  $show_delay: 1s;
  $active_duration: 1s;
  $active_delay: 1s;
  $active_fu: cubic-bezier(.405, 0, .025, 1);
  @include body-secondary;

  align-items: center;

  position: relative;

  display: flex;

  //transition: all .2s;
  transition: max-width ease $show_duration,margin-left ease $show_duration,opacity ease $show_duration;
  &-toggle {
    @include size(40px);
    position: absolute;
    top: 50%;
    right: 0;
    z-index: z(menu);

    border-radius: 50%;

    background-color: $color__light;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, .2);

    transform: translateY(-50%) scale(0);

    transition: transform ease .2s;

    &--active {

      transform: translateY(-50%) scale(100);
    }
  }

  &__text {
    flex-direction: column;

    display: flex;
    width: fit-content;
    height: 25px;
    overflow: hidden;

    span {
      transition: transform $active_fu $active_duration;
    }
  }

  .burger {
    @include size(35px);
    flex-direction: column;
    justify-content: space-around;

    position: relative;

    display: flex;

    margin-left: 10px;

    &:before, &:after {
      position: absolute;

      height: 2px !important;

      background-color: $color__dark;
      transition: transform $active_fu $active_duration;
    }

    &:before {
      @include pseudoElement(16px);
      top: calc(50% - 3px);
      left: 50%;

      transform: translate(-50%, -50%);
    }

    &:after {
      @include pseudoElement(8px);
      top: calc(50% + 3px);
      left: calc(50% - 3px);

      transform: translate(-50%, -50%);
    }
  }

  &--show {

    @include breakpoint($desktop__all) {
      max-width: 100px !important;

      margin-left: 40px;

      opacity: 1 !important;
    }

  }

  &--active {

    .menu-burger__text {

      span {
        transform: translateY(-100%);
      }
    }

    .burger {
      border: 1px solid $color__dark_6;
      border-radius: 50%;

      &:before {
        @include pseudoElement(18px);
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%) rotate(135deg);
      }

      &:after {
        @include pseudoElement(18px);
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%) rotate(225deg);
      }
    }
  }

  @include breakpoint($tablet__all) {
    margin-left: 40px;
  }
  @include breakpoint($desktop__all) {
    max-width: 0;

    opacity: 0;
  }

  @include breakpoint($phone__all) {

  }
}

</style>
