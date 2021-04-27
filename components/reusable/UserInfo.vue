<template>
  <div class="user-info" :class="{'user-info--dark':isDark}">
    <div class="user-info__contact-info">
      <figure class="user-info__img">
        <nuxt-img
          loading="lazy"
          :src="`/img/${data.img}`"
          alt="stos"
        />
      </figure>
      <p class="user-info__position">
        {{ data.position }}
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
        :is-dark="isDark"
        class="user-info__contact-tag"
        :link="tag.link"
        :icon="tag.icon"
      >
        {{ tag.name }}
      </ButtonTag>
    </div>
  </div>
</template>

<script>
import ButtonTag from './ButtonTag'

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
      color:$color__font_dark--quaternary
    }
  }

  &__img {
    margin-bottom: 8px;

    img {
      border-radius: 50%;
    }
  }

  &__position {
    @include body-secondary;
    color: $color__font--quaternary;
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
    }

    &-tags {
      align-self: flex-end;

      display: flex;
    }
  }
}

</style>
