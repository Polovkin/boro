<template>
  <button
    class="menu-burger"
    :class="{'menu-burger--active':burgerAnimate}"
    @click="menuToggle"
  >
    <span class="menu-burger__text">
      <span>Menu</span>
      <span>Close</span>
    </span>
    <span class="burger" />
  </button>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'MenuBurger',
  data() {
    return {
      burgerAnimate: false
    }
  },
  computed: {
    ...mapState({
      menu: s => s.popups.menuState,
      menuAnimationInProgress: s => s.popups.menuAnimationInProgress
    }),
    menuState () {
      return this.menu
    }
  },
  methods: {
    menuToggle () {
      if (this.menuState) {
        this.burgerAnimate = false
        this.$store.dispatch('popups/CLOSE_MENU')
      } else {
        this.burgerAnimate = true
        this.$store.dispatch('popups/OPEN_MENU')
      }
    }
  }
}
</script>

<style lang="scss">
.menu-burger {
  @include body-secondary;

  align-items: center;

  position: relative;

  display: flex;

  transition: all ease .2s .3s;

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

    transition: all linear .3s;

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
      transition: all cubic-bezier(.405, 0, .025, 1) 1s;
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
      transition: all cubic-bezier(.405, 0, .025, 1) 1s;
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

      transition: all ease .2s 1s;
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
  @include breakpoint($mobile__all) {
    margin-left: 40px;
  }
  @include breakpoint($desktop__all) {
    max-width: 0;

    opacity: 0;
  }
}
</style>
