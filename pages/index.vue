<template>
  <div class="page">
   <Preloader />
    <MainSection data-scroll-section />
    <div class="container">
      <Cases />
      <MainAbout />
      <Services />
      <MainBLog />
    </div>
  </div>
</template>

<script>

import MainSection from '../components/sections/MainSection'
import Cases from '../components/sections/Cases/Cases'
import MainAbout from '../components/sections/MainAbout'
import Services from '../components/sections/Services/Services'
import MainBLog from '../components/sections/Blog/MainBLog'
import Preloader from '../components/reusable/Preloader'

export default {
  name: 'Index',
  components: {
    Preloader,
    MainBLog,
    Services,
    MainAbout,
    Cases,
    MainSection

  },
  data () {
    return {
      name: '',
      textarea: ''
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
