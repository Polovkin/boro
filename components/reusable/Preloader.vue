<template>
  <div
    class="preloader"
    :class="{'preloader--hide':hide}"
  >
    <div

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
import { mapState } from 'vuex'

export default {
  name: 'Preloader',
  components: {
    LottieAnimation
  },
  data () {
    return {
      preload: true,
      animationDuration: 3140,
      hide: false
    }
  },
  computed: {
    ...mapState({
      preloaderDone: s => s.app.preloaderDone
    }),
    isPreloaderShow () {
      return !this.preloaderDone
    }
  },
  mounted () {
    setTimeout(() => {
      this.hide = true
    }, this.animationDuration)
    setTimeout(() => {
      this.$store.dispatch('app/DISPATCH_PRELOAD_STATE')
    }, this.animationDuration - 500)
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

  99% {
    transform: translateX(105%);
  }

  100% {
    visibility: hidden;
  }
}

.preloader {
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: z(preloader);

  display: flex;
  width: 100vw;
  height: 100vh;

  background-color: $color__dark;
  box-shadow: -13px 8px 20px 0px hsl(0deg 0% 100% / 10%), 0 5px 8px hsl(0deg 0% 100% / 10%);

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
