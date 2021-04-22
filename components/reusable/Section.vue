<template>
  <section
    v-in-viewport
    class="section"
  >
    <header class="section__header">
      <div class="section__header-wrap">
        <h2 class="section__title">
          {{ title }}
        </h2>
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
    <hr class="divider">
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      default: 0
    },
    numElem: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.section {
  padding: 24px 0;

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
      height: 70px;

      margin-bottom: 32px;
    }
  }
}
</style>
