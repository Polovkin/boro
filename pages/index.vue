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
    <MainSection data-scroll-sectio/>
    <section class="test">
      <h1>TEst</h1>
    </section>
<!--  <div class="example vertical">
      <header data-scroll-section>
        <h1>
          Пацанский скролл<br/>
          Для родного
        </h1>
      </header>
      <div class="example-section"
           data-scroll-section>
        <div class="example-content">
          <div
              class="example-big-square"
              data-scroll
              data-scroll-speed="-.5"
          />
          <div
              class="example-small-square"
              data-scroll
              data-scroll-speed="1.5"
          />
        </div>
      </div>
      <footer data-scroll-section>
        &lt;!&ndash;        <nuxt-link to="/horizontal-scroll/">
                  Go to Horizontal Scroll
                </nuxt-link>&ndash;&gt;
      </footer>
    </div>-->
    <Footer data-scroll-sectio/>
  </LocomotiveScroll>
</template>

<script>


import MainSection from "../components/sections/MainSection";
import LocomotiveScroll from "../LocomotiveScroll/component";
import Footer from "../components/layout/Footer";

export default {
  components: {
    Footer,
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
//@import './demo.scss';
.test {

  height: 100vh;
  background-color: red;
}
</style>
