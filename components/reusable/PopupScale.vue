<template>
  <div
    :class="{'popup-scale--active':isScaled}"
    class="popup-scale"
  />
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PopupScale',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      popupClose: true
    }
  },
  computed: {
    ...mapState({
      popupState: s => s.app.popupState
    }),
    isScaled () {
      return this.isActive && this.popupClose
    }
  },
  watch: {
    popupState (newValue) {
      this.popupClose = newValue
    }
  }
}
</script>

<style lang="scss">
.popup-scale {
  @include size(40px);
  position: absolute;
  top: 50%;
  left: 20px;
  z-index: z(modal);

  border-radius: 50%;

  background-color: $color__dark;

  transform: translateY(-50%) scale(0);

  transition: all ease-in .3s;

  &--active {
    transform: translateY(-50%) scale(100);
  }
}
</style>
