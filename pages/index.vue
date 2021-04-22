<template>
  <!--  <LocomotiveScroll
      ref="scroller"
      :getted-options="locomotiveOptions">
    <MainSection data-scroll-sectio/>
    <Cases data-scroll-sectio/>
    <Footer data-scroll-sectio/>
  </LocomotiveScroll>-->
  <div>
    <MainSection data-scroll-sectio />
    <Cases data-scroll-sectio />
    <MainAbout data-scroll-sectio />
    <Footer data-scroll-sectio />
  </div>
</template>

<script>

import MainSection from '../components/sections/MainSection'
import LocomotiveScroll from '../components/layout/LocomotiveScroll'
import Footer from '../components/layout/Footer'
import Cases from '../components/sections/Cases/Cases'
import MainAbout from "../components/sections/MainAbout";

export default {
  components: {
    MainAbout,
    Cases,
    Footer,
    LocomotiveScroll,
    MainSection

  },
  data () {
    return {
      name: '',
      textarea: '',
      locomotiveOptions: {
        smooth: true,
        direction: 'vertical',
        smartphone: {
          smooth: true,
          direction: 'vertical'
        },
        tablet: {
          smooth: true,
          direction: 'vertical'
        }
      }
    }
  },
  mounted () {

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
