<template>
  <nuxt-link to="/">
    <img width="142"
         height="32"
         :src="`/icons/${isLight ? 'Logo-light' : 'Logo'}.svg`"
         alt="logotype">
  </nuxt-link>
</template>

<script>
export default {
  name: "Logo",
  props: {
    isLight: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped>

</style>
