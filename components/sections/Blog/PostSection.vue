<template>
  <div class="post-section post-section__data">
    <h3 class="post-section__title" v-html="data.heading" />
    <div class="post-section__content" v-html="data.text"/>
    <hr class="divider">
  </div>
</template>

<script>
export default {
  name: 'PostSection',
  props: ['data']
}
</script>

<style lang="scss">

</style>
