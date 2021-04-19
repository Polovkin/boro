<template>
  <LocomotiveScroll
      ref="scroller"
      :getted-options="{
      smooth: true,
      direction: 'vertical',
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
      tablet: {
        smooth: true,
        direction: 'vertical',
      },
    }"
  >
    <div class="example vertical">
      <header data-scroll-section>
        <h1>
          Пацанский скролл<br />
          Для родного
        </h1>
      </header>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div
              class="example-big-square"
              data-scroll
              data-scroll-speed="-1.5"
          />
          <div
              class="example-small-square"
              data-scroll
              data-scroll-speed="3.5"
          />
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div
              class="example-small-square"
              data-scroll
              data-scroll-speed="2.5"
          />
          <div
              class="example-big-square"
              data-scroll
              data-scroll-speed="-0.5"
          />
        </div>
      </div>
      <div class="example-section" data-scroll-section>
        <div class="example-content">
          <div
              class="example-big-square"
              data-scroll
              data-scroll-speed="-0.5"
          />
          <div
              class="example-small-square"
              data-scroll
              data-scroll-speed="2.5"
          />
        </div>
      </div>
      <footer data-scroll-section>
<!--        <nuxt-link to="/horizontal-scroll/">
          Go to Horizontal Scroll
        </nuxt-link>-->
      </footer>
    </div>
  </LocomotiveScroll>
</template>

<script>


import MainSection from "../components/sections/MainSection";
import LocomotiveScroll from "../LocomotiveScroll/component";

export default {
  components: {
    LocomotiveScroll,
    MainSection

  },
  data() {
    return {
      name: '',
      textarea: ''
    }
  },
  methods: {}
}
</script>
<style lang="scss">
@import './demo.scss';

</style>
