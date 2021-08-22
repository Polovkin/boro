<template>
  <div
    class="user-info"
    :class="{'user-info--dark':isDark,'user-info--to-left':isToLeft}"
  >
    <div class="user-info__contact-info">
      <figure class="user-info__img">
        <nuxt-picture
          width="62"
          height="62"
          loading="lazy"
          :src="data.img"
          :alt="data.name"
        />
      </figure>
      <p class="user-info__position">
        {{ data.role }}
      </p>
      <p class="user-info__name">
        {{ data.name }}
      </p>
    </div>
    <div
      v-if="tags"
      class="user-info__contact-tags"
    >
      <ButtonTag
        v-for="(tag,index) of tags"
        :key="index"
        class="user-info__contact-tag"
        :is-dark="isDark"
        :link="tag.link"
        :icon="tag.icon"
      >
        {{ tag.name }}
      </ButtonTag>
    </div>
  </div>
</template>

<script>
import ButtonTag from './buttons/ButtonTag'

export default {
  name: 'UserInfo',
  components: { ButtonTag },
  props: {
    isDark: {
      type: Boolean,
      default: false
    },
    isToLeft: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: null
    },
    tags: {
      type: Array,
      default: null
    }
  }

}
</script>

<style scoped
       lang="scss">

.user-info {

  &--to-left {
    display: flex;

    .user-info__img {

      @include breakpoint($mobile__all) {
        justify-content: flex-end;

        display: flex;
      }
    }

    .user-info__position {
      @include breakpoint($mobile__all) {
        text-align: right;
      }
    }
  }

  &--dark {

    .user-info__position {
      color: $color__font--quaternary;
    }
  }

  &__position {
    @include body-secondary;
    color: $color__font_dark--quaternary;

  }

  &__name {
    @include h6;
  }

  &__img {
    margin-bottom: 10px;

    picture {
      @include size(62px);
      display: block;
      overflow: hidden;

      border-radius: 50%;
    }

  }

  &__contact {
    justify-content: flex-end;

    display: flex;

    &-info {
      align-self: flex-end;

      margin-right: 40px;
      @include breakpoint($mobile__all) {
        margin-right: 0;
        margin-bottom: 12px;
      }
    }

    &-tags {
      align-self: flex-end;

      display: flex;
    }
  }

  @include breakpoint($mobile__all) {

    flex-direction: column;
  }
}

</style>
