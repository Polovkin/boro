<template>
  <nuxt-link
    v-if="link"
    to="link"
    class="button-tag"
    :class="{'button-tag--dark':isDark,'button-tag--icon':isIconAnimate}"
  >
    <span class="button-tag__wrap">
      <img
        :src="`/icons/${icon}`"
        class="button-tag__icon"
        :alt="icon.split('.')[0]"
      >
      <span class="button-tag__text">
        <slot />
      </span>
    </span>
  </nuxt-link>
  <button
    v-else
    :class="{'button-tag--dark':isDark}"
    class="button-tag button-tag-simple"
  >
    <span class="button-tag__wrap">
      <span class="button-tag__text">
        <slot />
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ButtonTag',
  props: {
    isDark: {
      type: Boolean,
      default: false
    },
    isIconAnimate: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped
       lang="scss">
.button-tag {
  $animation: all ease-in .2s;
  $icon_size: 12px;
  @include caption-normal;
  display: block;
  width: fit-content;
  height: 33px;
  max-height: 33px;

  margin-right: 12px;
  padding: 8px 10px;

  border: 1px solid transparent;
  border-radius: 4px;

  background-color: $color__gray_light;

  color: $color__font_dark--tertiary;

  text-transform: capitalize;

  transition: $animation;

  &:last-child {
    margin-right: 0;
  }

  &--dark {
    background-color: $color__light_6;

    color: $color__light;

    &:hover {
      //border: 1px solid $color__gray_light;

      background-color: $color__light_6 !important;

      .button-tag__text {
        color: $color__light !important;
      }

    }
  }
&--icon {
  &:hover {
    .button-tag__icon {
      @include size($icon_size);
      margin-right: 7px;

      transform: scale(1.2);
    }
  }
}
  &-simple {
    cursor: auto;
  }

  &:hover {
    border: 1px solid $color__gray_light;

    background-color: $color__background_primary;

    .button-tag__text {
      color: $color__font--primary;
      text-decoration: underline;
    }



  }

  &__wrap {
    align-items: center;

    display: flex;
  }

  &__text {
    transition: $animation .2s;
  }

  &__icon {
    @include size(0);
    transition: $animation .2s;

    object-fit: contain;
  }

}
</style>
