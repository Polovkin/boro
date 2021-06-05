<template>
  <div class="page">
    <div class="container">
      <section
        id="top"
        v-in-viewport
        class="page__section"
        data-scroll-section
      >
        <div class="page__title">
          <h2>
            <slot name="title" />
          </h2>
          <div>
            <slot name="elem" />
          </div>
          <hr class="divider">
        </div>

        <div class="page__content">
          <slot name="content" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    propName: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">

</style>
