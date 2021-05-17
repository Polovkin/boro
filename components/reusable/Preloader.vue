<template>
  <div
    class="preloader"
    :class="{'preloader--hide':hide}"
  >
    <div
      v-show="preload"
      class="preloader__logo"
    >
      <lottie-animation
        :loop="false"
        path="./animations/boro-logotype.json"
      />
    </div>
  </div>
</template>

<script>
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue'

export default {
  name: 'Preloader',
  components: {
    LottieAnimation
  },
  data () {
    return {
      preload: true,
      animationDuration: 2140,
      animationDelay: 500,
      hide: false
    }
  },
  mounted () {
    this.$store.commit('app/SET_PRELOADER_STATE', true)
    setTimeout(() => {
      this.preload = true
    }, this.animationDelay)

    setTimeout(() => {
      this.hide = true
      setTimeout(() => {
        this.$store.commit('app/SET_PRELOADER_STATE', true)
      }, 1600)
    }, this.animationDuration + this.animationDelay)
  }
}
</script>

<style scoped
       lang="scss">
$base_width: 121px;
$base_height: 40px;
$multiple: 5;
$svg_hide_duration: 1s;
$preloader_hide_duration: .4s;

@keyframes preloader-svg-hide {

  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: scale(.8);
    opacity: 0;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes preloader-hide {

  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}

.preloader {
  @include size(100%);
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: z(preloader);

  display: flex;

  background-color: $color__dark;

  &__logo {
    width: round($base_width * $multiple);
    height: round($base_height * $multiple);
  }

  &--hide {
    animation: {
      duration: $preloader_hide_duration;
      delay: $svg_hide_duration - .2s;
      timing-function: linear;
      fill-mode: forwards;
      name: preloader-hide;
    };

    .preloader__logo {
      animation: {
        timing-function: $videinfa_function;
        duration: $svg_hide_duration;
        fill-mode: forwards;
        name: preloader-svg-hide;
      };
    }
  }
}
</style>
