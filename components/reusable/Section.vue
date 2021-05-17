<template>
  <section
    v-in-viewport.once
    data-scroll-section
    class="section"
  >
    <header class="section__header">
      <div class="section__header-wrap">
        <div class="animation-mask">
          <slot name="title" />
        </div>

        <div
          :class="{'numeric': numElem}"
          class="section__elem animation-move-from-left"
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

  h2 {
    @include breakpoint ($phone__all) {
      align-self: flex-end;
    }
  }

  &__elem {
    align-self: flex-end;
    @include breakpoint ($phone__all) {
      position: relative;
      top: -2px;
    }
  }

  &__content {
    margin-bottom: 30px;
  }

  &__header {

    position: relative;

    .divider {
      @include breakpoint ($phone__all) {
        display: none;
      }
    }

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
