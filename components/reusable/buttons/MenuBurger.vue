<template>
  <button
      class="menu-burger"
      @click="openMenu"
  >
    Menu
    <span class="burger"/>
    <span
        class="menu-burger-toggle"
        :class="{'menu-burger-toggle--active':isPopOpen}"
    />
  </button>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'MenuBurger',
  data() {
    return {
      isPopOpen: false
    }
  },
  computed: {
    ...mapState({
      menu: s => s.app.menuState
    }),
    menuState() {
      return this.menu
    }
  },
  watch: {
    menuState(newValue) {
      if (!newValue) {
        this.isPopOpen = this.menu
      }
    }
  },
  methods: {
    openMenu() {
      this.isPopOpen = true

      setTimeout(() => {
        this.$store.commit('app/SET_MENU_STATE', true)
      }, 300)
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

  &--show {
    @include breakpoint($desktop__all) {
      max-width: 100px;

      margin-left: 40px;

      opacity: 1;

      transition: all ease .2s 1s;
    }

  }

  .burger {
    flex-direction: column;
    justify-content: space-around;

    position: relative;

    display: flex;
    height: 12px;

    margin-left: 12px;

    &:before, &:after {

      height: 1.5px !important;

      background-color: $color__dark;

    }

    &:before {
      @include pseudoElement(16px);

      position: relative;
    }

    &:after {
      @include pseudoElement(8px);
      position: relative;

    }
  }
  @include breakpoint ($mobile__all) {
    margin-left: 40px;
  }
  @include breakpoint ($desktop__all) {
    max-width: 0;

    opacity: 0;
  }
}
</style>
