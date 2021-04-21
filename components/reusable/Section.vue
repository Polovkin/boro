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
    //color: $color__dark !important;
  /*  align-self: flex-end;
    @include title-link;

    &.numeric {
      display: flex;

      a,p {
        color: $color__dark;
        &:after {
          @include body-tertiary;
          content: attr(data-attr);
          position: relative;
          display: inline-block;
          text-decoration: none;
          top: -17px;
          margin-left: 4px;
          padding: 2px 4px;
          border-radius: 4px;
          background-color: $color__gray_light;
        }
      }

    }*/


  }

  &__content {
    padding-top: 190px;
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
