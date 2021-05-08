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
      {{ $t('buttons.read-more') }}
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
    @include breakpoint($mobile__all) {
      display: grid;
      grid: {
        template: {
          columns: repeat(2,1fr);
          areas: 'title tags' 'date tags' 'text tags';
        };
      }
    }
  }

  &__title {
    margin: 8px 0 4px;
    grid-area: title;
  }

  &__text {
    @include body-secondary;
    height: 44px;
    overflow: hidden;

    margin-bottom: 20px;

    text-overflow: ellipsis;
    grid-area: text;

  }

  &__date {
    @include body-secondary;
    margin-bottom: 14px;

    color: $color__font_dark--secondary;
    grid-area: date;
  }

  &__tags {
    display: flex;
    grid-area: tags;

    margin-bottom: 20px;
    @include breakpoint ($mobile__all) {
      justify-self: end;
    }
  }

  &__button {
    margin-top: auto;
  }
}

</style>
