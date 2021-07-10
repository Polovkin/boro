<template>
  <div class="page">
    <Preloader v-if="$config.IS_DEV" />
    <MainSection
      id="top"
      data-scroll-section
    />
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
import Preloader from '../components/common/Preloader'
import { pageMixin } from '../mixins/page-mixins'

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
  mixins: [pageMixin],

  data () {
    return {
      name: '',
      textarea: ''
    }
  },
  mounted () {
    const scrollOpt = {
      target: '#top',
      options: ''
    }
    this.$nuxt.$emit('update-locomotive')
    this.$nuxt.$emit('scroll-locomotive', scrollOpt)
  }
}
</script>
<style lang="scss">

</style>
