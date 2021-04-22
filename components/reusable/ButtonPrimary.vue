<template>
  <nuxt-link
    v-if="link"
    class="text-color-primary"
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
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    link: {
      type: String
    }
  },
  data () {
    return {
      wave: null,
      classHover: 'button--hover',
      classLeave: 'button--leave'
    }
  },
  mounted () {

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
    }
  }
}
</script>

<style scoped
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
  padding: 10px 0 10px 10px;
  position: relative;

  display: flex;
  transition: all .1s ease-in;

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

  &--leave {
    .button__wave {
      animation: {
        name: leave-animation;
        duration: $wave_animation_duration;
        fill-mode: forwards;
      }
    }
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

    width: 15px;
    height: 15px;
    z-index: z(bg-content);
    border-radius: 100%;

    background: $color__dark;

    transform: scale(0);
  }

  &:hover {
    .arrow {
      transform: translate(-50%, -50%) scale(.2) rotate(0deg);
      background-color: $color__primary;

      &::after, &::before {
        background-color: $color__primary;
      }
    }
  }

  &:active {
    transform: scale(.96);
  }

  .icon {
    position: absolute;
    z-index: z(content);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 60px;
    cursor: pointer;
  }

  .arrow {
    transition: all $arrow_animation_duration $arrow_animation_delay ease;
    position: absolute;
    width: 90%;
    height: 10px;
    background-color: $color__dark;
    transform: translate(-50%, -50%) scale(.2) rotate(-45deg);
    top: 50%;
    left: 50%;

    &::after, &::before {
      transition: all $arrow_animation_duration $arrow_animation_delay ease;
      content: '';
      position: absolute;
      width: 60%;
      height: 10px;
      right: -8px;
      background-color: $color__dark;
    }

    &::after {
      top: -12px;
      transform: rotate(45deg);
    }

    &::before {
      top: 12px;
      transform: rotate(-45deg);
    }
  }
}

</style>
