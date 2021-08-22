<template>
  <button class="button-to-top" @click="toTop">
    {{ $t('buttons.to-top') }}<span />
  </button>
</template>

<script>
export default {
  name: 'ButtonToTop',
  methods: {
    toTop () {
      const el = document.querySelector('#top')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="scss">
.button-to-top {
  @include title-link;
  align-items: center;

  display: flex;

  span {
    @include size(70px);
    position: relative;

    margin-left: 18px;

    border: 1px solid $color__dark_6;
    border-radius: 50%;

    &:before {
      @include pseudoElement(20px, 'Arrow.svg');
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
