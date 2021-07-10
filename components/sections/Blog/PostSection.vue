<template>
  <div
    v-in-viewport.once
    class="post-section post-section__data"
  >
    <div class="animation-move-from-right">
      <h3
        class="post-section__title"
        v-html="data.heading"
      />
    </div>
    <div class="animation-move-from-left">
      <div
        class="post-section__content"
        v-html="data.text"
      />
    </div>
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
