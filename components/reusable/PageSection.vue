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
.page {

  &__section {
    padding-top: $header_height + 130px;

  }

  &__content  {
    flex-direction: column;

    display: flex;
  }

  &__title {
    @include h2;
    align-items: center;
    justify-content: space-between;

    display: flex;

    margin-bottom: 71px;
  }
}

</style>
