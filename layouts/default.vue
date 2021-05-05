<template>
  <div class="app">
    <!--    <Preloader />-->
    <PopupFluid />
    <Menu />
    <Header />
    <main class="main">
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>

import PopupFluid from '../components/layout/Popup/PopupFluid'
import Menu from '../components/layout/Menu'
import Header from '~/components/layout/Header'

export default {
  components: { Menu, PopupFluid, Header },
  data () {
    return {}
  },
  mounted() {

  }
}
</script>
<style lang="scss">
@import "~@/assets/scss/_app.scss";
@import "~@/assets/scss/_layout.scss";

.app {overflow: hidden;
}
</style>
