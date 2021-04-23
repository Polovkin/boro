<template>
  <nuxt-link
    v-if="!isTo"
    class="link"
    :to="link"
  >
    <span class="link__hide">
      <span class="link__wrap">
        <slot />
      </span>
    </span>

    <span
      v-if="payload"
      class="link__payload"
    >{{ payload }}</span>
  </nuxt-link>
  <a v-else class="link" :href="link">
    <span class="link__hide">
      <span class="link__wrap">
        <slot />
      </span>
    </span>
  </a>
</template>

<script>
export default {
  name: 'LinkPrimary',
  props: {
    link: {
      type: String,
      required: true
    },
    payload: {
      type: String
    },
    isTo: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style
       lang="scss">
.link {
  $arrow_size: 16px;
  $arrow_margin: 8px;
  $animation__duration: .2s;

  display: flex;
  width: fit-content;

  text-decoration: none;

  &__payload {
    @include body-tertiary;
    position: relative;
    top: -17px;

    display: inline-block;

    margin-left: 4px;
    padding: 2px 4px;

    border-radius: 4px;

    background-color: $color__gray_light;

    text-decoration: none;

    transition: all ease-in-out .2s;
  }

  &:visited {
    color: $color__dark;
  }

  &:hover,
  &:focus {
    text-decoration: none;

    outline: 0;
  }

  &__hide {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__wrap {
    @include title-link;
    align-items: center;

    position: relative;

    display: flex;

    transform: translateX($arrow_size + $arrow_margin);

    transition: transform $animation__duration ease-in;

    &:after {
      @include pseudoElement($arrow_size, 'Arrow-yellow.svg');
      position: relative;

      margin-left: $arrow_margin;

      opacity: 0;

      transition: opacity $animation__duration ease $animation__duration;
    }
  }

  &:hover {

    .link__wrap {
      color: $color__primary;
    }

    .link__payload {
      top: 0;

      font-weight: bold;
    }

    .link__wrap {
      transform: translateX(0);

      &:after {
        opacity: 1;
      }
    }
  }

  &:active {
    transform: scale(.8);
  }
}
</style>
