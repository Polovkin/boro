<template>
  <div class="app">
    <!--    <Preloader/>-->
    <Header />
    <main class="main">
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Footer from '../components/layout/Footer'
import Preloader from '../components/reusable/Preloader'
import Header from '~/components/layout/Header'

export default {
  components: { Preloader, Footer, Header },
  data () {
    return {}
  }
}
</script>
<style lang="scss">
@import "~@/assets/scss/_app.scss";
@import "~@/assets/scss/_layout.scss";
</style>
