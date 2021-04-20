<template>
  <nuxt-link class="link"
             :to="link">
    <span class="link__wrap">
          <slot/>
    </span>

  </nuxt-link>
</template>

<script>
export default {
  name: "LinkPrimary",
  props: {
    link: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped
       lang="scss">
.link {
  $arrow_size: 16px;
  $arrow_margin: 8px;

  @include title-link;
  display: block;
  width: fit-content;
  overflow: hidden;

  &__wrap {

    transition: transform .2s ease-in;
    position: relative;
    display: flex;
    align-items: center;
    transform: translateX($arrow_size + $arrow_margin);

    &:after {
      opacity: 0;
      transition: opacity .3s ease .2s;
      @include pseudoElement($arrow_size, 'Arrow-yellow.svg');
      position: relative;
      margin-left: $arrow_margin;

    }
  }


  &:hover {
    color: $color__primary;

    .link__wrap {
      transform: translateX(0);

      &:after {
        opacity: 1;
      }
    }


  }
}
</style>
