<template>
  <section
    v-in-viewport
    data-scroll-section
    class="section"
  >
    <header class="section__header">
      <div class="section__header-wrap">
        <slot name="title" />
        <div
          :class="{'numeric': numElem}"
          class="section__elem"
        >
          <slot name="elem" />
        </div>
      </div>
      <hr class="divider">
    </header>
    <div class="section__content">
      <slot name="content" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    numElem: {
      type: Boolean,
      default: false
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
.section {
  padding: 60px 0;

  &__elem {
    align-self: flex-end;
  }

  &__content {
    margin-bottom: 30px;
  }

  &__header {

    position: relative;

    &-wrap {
      align-items: center;
      justify-content: space-between;

      display: flex;
      min-height: 70px;

      margin-bottom: 32px;
    }
  }
}
</style>
