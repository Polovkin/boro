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
    <Footer data-scroll-sectio/>
  </LocomotiveScroll>
</template>

<script>


import MainSection from "../components/sections/MainSection";
import LocomotiveScroll from "../components/layout/LocomotiveScroll";
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
  mounted() {

  }
}
</script>
<style lang="scss">
//@import './demo.scss';
.test {

  height: 100vh;
  //background-color: red;
}
</style>
