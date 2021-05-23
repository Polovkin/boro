<template>
  <nuxt-link
    class="logotype"
    to="/"
  >
    <img
      width="142"
      height="32"
      :src="require(`~/assets/icons/${isLight ? 'Logo-light' : 'Logo'}.svg?inline`)"
      alt="logotype"
    >
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isLight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.logotype {
  position: relative;

  display: block;
}
</style>
