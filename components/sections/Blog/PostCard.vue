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
import ButtonTag from '../../reusable/ButtonTag'
import ButtonPrimary from '../../reusable/ButtonPrimary'

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
  height: 550px;

  &__img {
    margin-bottom: 24px;
  }

  &__body {
    flex-direction: column;
    justify-content: space-between;

    display: flex;
  }

  &__title {
    margin: 8px 0 16px;
  }

  &__text {
    @include body-secondary;
    height: 44px;
    overflow: hidden;

    text-overflow: ellipsis;

  }

  &__date {
    margin-bottom: 10px;
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
