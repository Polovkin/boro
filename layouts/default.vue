<template>
  <div class="app">
    <Header/>
    <main class="main">
      <div class="container">
        <nuxt/>
      </div>
    </main>
  </div>
</template>


<script>
import Header from "~/components/layout/Header";
import Footer from "../components/layout/Footer";

export default {
  components: {Footer, Header},
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import "~@/assets/scss/_app.scss";
@import "~@/assets/scss/_layout.scss";
</style>
