<template>
  <div
    class="user-info"
    :class="{'user-info--dark':isDark}"
  >
    <div class="user-info__contact-info">
      <figure class="user-info__img">
        <img
          width="62"
          height="62"
          loading="lazy"
          :src="`/img/${data.img}`"
          alt="stos"
        />
      </figure>
      <p class="user-info__position">
        {{ $t(data.position) }}
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
  display: flex;

  &--dark {

    .user-info__position {
      color: $color__font--quaternary
    }
  }

  &__img {
    margin-bottom: 12px;

    img {
      border-radius: 50%;
    }

    @include breakpoint($mobile__all) {
      justify-content: flex-end;

      display: flex;
    }
  }

  &__position {
    @include body-secondary;
    color: $color__font_dark--quaternary;
    @include breakpoint($mobile__all) {
      text-align: right;
    }
  }

  &__name {
    @include h6;
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
