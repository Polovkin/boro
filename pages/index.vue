<template>
  <div v-if="true">
    <LocomotiveScroll
      ref="scroller"
      data-scroll-container
      :getted-options="locomotiveOptions"
    >
      <MainSection data-scroll-section />
<!--      <Cases />
      <Services />
      <MainBLog />
      <Lead />-->
      <Footer />
    </LocomotiveScroll>
  </div>

  <div v-else>
    <MainSection data-scroll-section />
    <Cases />
    <MainAbout />
    <Services />
    <MainBLog />
    <Lead />
    <Footer />
  </div>
</template>

<script>

import MainSection from '../components/sections/MainSection'
import LocomotiveScroll from '../components/layout/LocomotiveScroll'
import Footer from '../components/layout/Footer'
import Cases from '../components/sections/Cases/Cases'
import MainAbout from '../components/sections/MainAbout'
import Services from '../components/sections/Services/Services'
import Lead from '../components/sections/Lead'
import MainBLog from '../components/sections/Blog/MainBLog'

export default {
  components: {
    MainBLog,
    Lead,
    Services,
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
