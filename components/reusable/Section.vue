<template>
  <section v-in-viewport class="section">
    <header class="section__header">
      <h2 class="section__title">{{ title }}</h2>
      <div class="section__elem">
        <slot name="elem"/>
      </div>
      <hr class="divider">
    </header>
    <slot name="content"/>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: {
      type: String,
      default: 0
    },
  },
}
</script>

<style lang="scss">
.section {
  padding: 65px 0;
}
</style>
