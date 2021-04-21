<template>
  <div class="main-section">
    <div class="main-section__wrap"
         data-scroll-sectio>
      <div data-scroll
           data-scroll-speed="1"
           class="main-section__title"><h1>We are design agency with solid expertise in<TextFlip :data="text"/></h1></div>
      <Navigation data-scroll
                  data-scroll-speed="1.5"
                  class="main-section__navigation"/>
    </div>
  </div>
</template>

<script>
import Navigation from "../reusable/Navigation";
import TextFlip from "../reusable/TextFlip";


export default {
  name: "MainSection",
  components: {TextFlip, Navigation},
  data() {
    return {
      text: ['UI/UX', 'GL/HF', 'SS/WP'],
    }
  },
}
</script>

<style lang="scss">
@import "~@/assets/scss/core/headings";
@import "~@/assets/scss/sections/main-sections";

</style>
