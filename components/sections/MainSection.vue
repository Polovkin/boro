<template>
  <div class="main-section">
    <div class="main-section__wrap">
      <div class="main-section__title">
        <h1>We are design agency with solid expertise in</h1>
      </div>
      <Navigation class="main-section__navigation"/>
    </div>
  </div>
</template>

<script>
import Navigation from "../reusable/Navigation";

export default {
  name: "MainSection",
  components: {Navigation}
}
</script>

<style lang="scss">
@import "~@/assets/scss/sections/main-sections";

</style>
