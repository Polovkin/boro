<template>
  <section class="blog-card">
    <figure class="blog-card__img">
      <nuxt-img
        width="430"
        height="248"
        lazyload="true"
        :src="post.img"
      />
    </figure>
    <div class="blog-card__body">
      <h5 class="blog-card__title">
        {{ post.title }}
      </h5>
      <time class="blog-card__date">{{ post.date }}</time>
      <div class="blog-card__tags">
        <ButtonTag
          v-for="(tag,index) of post.tags"
          :key="index"
        >
          {{ tag }}
        </ButtonTag>
      </div>
      <p class="blog-card__text">
        {{ post.text }}
      </p>
    </div>
    <ButtonPrimary
      class="blog-card__button"
      :link="post.link"
    >
      Read more
    </ButtonPrimary>
  </section>
</template>

<script>
import ButtonTag from '../../reusable/buttons/ButtonTag'
import ButtonPrimary from '../../reusable/buttons/ButtonPrimary'

export default {
  name: 'PostCard',
  components: { ButtonPrimary, ButtonTag },
  props: ['post']

}
</script>

<style lang="scss">
.blog-card {
  flex-direction: column;

  display: flex;
  min-height: 522px;

  &__img {
    margin-bottom: 12px;
  }

  &__body {
    flex-direction: column;
    justify-content: flex-start;

    display: flex;
  }

  &__title {
    margin: 8px 0 4px;
  }

  &__text {
    @include body-secondary;
    height: 44px;
    overflow: hidden;

    text-overflow: ellipsis;
    margin-bottom: 20px;

  }

  &__date {
    @include body-secondary;
    margin-bottom: 14px;
  }

  &__tags {
    display: flex;

    margin-bottom: 20px;
  }

  &__button {
    margin-top: auto;
  }
}

</style>
