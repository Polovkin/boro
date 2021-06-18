<template>
  <section
    v-in-viewport
    class="case-section"
  >
    <h3
      class="case-section__title"
      v-html="data.heading"
    />
    <p
      class="case-section__description"
      v-html="data.description"
    />
    <div
      class="case-section__content"
    >
      <nuxt-picture
        v-for="(img,i) of data.content"
        :key="i"
        :src="`/static${img}`"
      />
    </div>
    <hr class="divider">
  </section>
</template>

<script>
export default {
  name: 'CaseSection',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.case-section {

  $grids: (title, description, content);
  @each $item in $grids {
    &__#{$item} {
      grid-area: #{$item};
    }
  }
  position: relative;

  display: grid;
  grid-gap: 24px;
  padding: 40px 0;
  grid: {
    template: {
      columns: repeat(2, 1fr);
      areas: 'title description' 'content content';
    };
  };
  @include breakpoint($portrait__all) {
    display: flex;
    flex-direction: column;
  }

  .divider {
    position: absolute;
    bottom: 0;
  }

  &__title {
    @include h5;
  }

  &__description {
    @include body-secondary;
  }

  &__content {
    direction: rtl;

    padding-top: 40px;
    display: grid;
    grid: {
      column-gap: 24px;
      auto-flow: dense;
      template: {
        columns: repeat(2, 1fr);
      };
    };

    @include breakpoint($portrait__all) {
      img {
        margin-bottom: 30px;
      }
      display: flex;
      flex-direction: column;
    }
  }

}
</style>
