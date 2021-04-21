<template>
  <section v-in-viewport
           class="section">
    <header class="section__header">
      <div class="section__header-wrap">
        <h2 class="section__title">{{ title }}</h2>
        <div :class="{'numeric': numElem}"
             class="section__elem">
          <slot name="elem"/>
        </div>
      </div>
      <hr class="divider">
    </header>
    <div class="section__content">
      <slot name="content"/>
    </div>
    <hr class="divider">
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
    numElem: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
.section {
  padding: 24px 0;

  &__elem {
    align-self: flex-end;
  }

  &__content {
    //padding-top: 190px;
    margin-bottom: 30px;
  }

  &__header {

    &-wrap {
      margin-bottom: 32px;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    position: relative;
  }
}
</style>
