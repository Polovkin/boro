<template>
  <div class="post-section">

    <h3 class="post-section__title">
      <slot name="title" />
    </h3>
    <div class="post-section__content">
      <slot name="content" />
    </div>
    <hr class="divider">
  </div>
</template>

<script>
export default {
  name: 'PostSection'
}
</script>

<style lang="scss">
.post-section {
  $areas: (title,content);
  @each $item in $areas {
    &__#{$item} {
      grid-area: #{$item};
    }
  }
  position: relative;

  display: grid;

  padding: 32px 0;

  .divider {
    position: absolute;
    bottom: 0;
  }
  grid: {
    template: {
      columns:  5fr 1fr 5fr;
      areas: 'title . content';
    };
  }
}
</style>
