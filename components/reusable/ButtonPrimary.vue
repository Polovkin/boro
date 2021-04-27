<template>
  <nuxt-link
    v-if="link"
    class="button__link text-color-primary"
    :to="link"
  >
    <button
      ref="button"
      class="button"
      @mouseleave="mouseLeave"
      @mouseenter="mouseEnter"
    >
      <slot />
      <span
        ref="circle"
        class="button__circle"
      >
        <span class="icon">
          <span class="arrow" />
        </span>
        <span
          ref="wave"
          class="button__wave"
        />
      </span>
    </button>
  </nuxt-link>

  <button
    v-else
    ref="button"
    class="button"
    :type="isSubmit ? 'submit':'button'"
    @click="openPopup"
    @mouseleave="mouseLeave"
    @mouseenter="mouseEnter"
  >
    <slot />
    <span
      ref="circle"
      class="button__circle"
    >
      <span class="icon">
        <span class="arrow" />
      </span>
      <span
        ref="wave"
        class="button__wave"
      />
    </span>
    <span
      v-if="isPopupToggle"
      class="button__popup-toggle"
      :class="{'button__popup-toggle--active':isPopOpen}"
    />
  </button>
</template>

<script>
import { mapState } from 'vuex'
import { POPUP_GET_IN_TOUCH } from '../../store/types'

export default {
  name: 'ButtonPrimary',
  props: {
    link: {
      type: String,
      default: ''
    },
    isSubmit: {
      type: Boolean,
      default: false
    },
    isPopupToggle: {
      type: Boolean,
      default: false
    },
    popupCalledType: {
      type: String,
      default: POPUP_GET_IN_TOUCH
    }

  },
  data () {
    return {
      wave: null,
      classHover: 'button--hover',
      classLeave: 'button--leave',
      isPopOpen: false
    }
  },
  computed: {
    ...mapState({
      popupState: s => s.app.popupState
    }),
    isScaled () {
      return this.popupState && this.isPopOpen
    }
  },
  watch: {
    popupState (newValue) {
      this.isPopOpen = newValue
    }
  },
  methods: {
    mouseEnter (event) {
      this.$refs.button.classList.remove(this.classLeave)

      this.$refs.wave.style.left = event.clientX - this.$refs.circle.getBoundingClientRect().left + 'px'
      this.$refs.wave.style.top = event.clientY - this.$refs.circle.getBoundingClientRect().top + 'px'

      // eslint-disable-next-line no-void
      void this.$refs.button.offsetWidth
      this.$refs.button.classList.add(this.classHover)
    },
    mouseLeave () {
      this.$refs.button.classList.remove(this.classHover)
      this.$refs.button.classList.add(this.classLeave)
    },
    openPopup () {
      if (this.isPopupToggle) {
        this.isPopOpen = true
        setTimeout(() => {
          this.$store.commit('app/SET_POPUP_STATE', true)
          this.$store.commit('app/SET_POPUP_TYPE', this.popupCalledType)
        }, 300)
      }
    }
  }
}
</script>

<style
       lang="scss">
@keyframes hover-animation {

  from {
    transform: scale(0);
  }

  to {
    transform: scale(20);
  }
}

@keyframes leave-animation {

  from {
    transform: scale(20);
  }

  to {
    transform: scale(0);
  }
}

.button {
  $circle_size: 40px;
  $arrow_size: 12px;
  $arrow_animation_duration: .3s;
  $arrow_animation_delay: .1s;
  $wave_animation_duration: 1s;

  @include title-link;
  align-items: center;

  position: relative;

  display: flex;

  padding: 10px 0;

  transition: all .1s ease-in;

  &--leave {

    .button__wave {
      animation: {
        name: leave-animation;
        duration: $wave_animation_duration;
        fill-mode: forwards;
      }
    }
  }

  &__link {
    width: fit-content;
  }

  &__circle {
    @include pseudoElement($circle_size);
    position: relative;
    z-index: z(bg-content);

    overflow: hidden;

    margin-left: 12px;

    border-radius: 50%;

    background-color: $color__primary;

  }

  &__wave {
    position: absolute;
    top: 0;
    left: 0;
    z-index: z(bg-content);

    width: 15px;
    height: 15px;

    border-radius: 100%;

    background: $color__dark;

    transform: scale(0);
  }

  &--hover {

    .button__wave {
      animation: {
        name: hover-animation;
        duration: $wave_animation_duration;
        fill-mode: forwards;
        timing-function: cubic-bezier(.25, .74, .22, .99);
      }
    }
  }

  &__popup-toggle {
    @include size($circle_size);
    position: absolute;
    top: 50%;
    right: 0;
    z-index: z(modal);

    border-radius: 50%;

    background-color: $color__dark;

    transform: translateY(-50%) scale(0);

    transition: all linear .3s;

    &--active {
      transform: translateY(-50%) scale(100);
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 90%;
    height: 10px;

    background-color: $color__dark;

    transform: translate(-50%, -50%) scale(.2) rotate(-45deg);

    transition: all $arrow_animation_duration $arrow_animation_delay ease;

    &:after, &:before {
      content: '';

      position: absolute;
      right: -8px;

      width: 60%;
      height: 10px;

      background-color: $color__dark;

      transition: all $arrow_animation_duration $arrow_animation_delay ease;
    }

    &:after {
      top: -12px;

      transform: rotate(45deg);
    }

    &:before {
      top: 12px;

      transform: rotate(-45deg);
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: z(content);

    width: 80px;
    height: 60px;

    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  &:hover {

    .arrow {
      background-color: $color__primary;

      transform: translate(-50%, -50%) scale(.2) rotate(0deg);

      &:after, &:before {
        background-color: $color__primary;
      }
    }
  }

  &:active {
    transform: scale(.96);
  }



}

</style>
