<template>
  <div class="blog-pagination">
    <nuxt-link
      :to="linkPrev"
      class="blog-pagination__button blog-pagination__prev"
      :class="{'blog-pagination__button--unactive':!paginationData.prev}"
    >
      {{ $t('blog.post.prev') }}
    </nuxt-link>
    <nuxt-link
      :class="{'blog-pagination__button--unactive':paginationData.next ===posts.length}"
      :to="linkNext"
      class="blog-pagination__button blog-pagination__next"
    >
      {{ $t('blog.post.next') }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BlogPagination',
  props: ['current'],
  data () {
    return {
      paginationData: {
        prev: null,
        next: null
      }
    }
  },
  computed: {
    posts () {
      return this.$store.state.app.posts
    },
    linkPrev () {
      return `/blog/posts/${this.paginationData.prev}`
    },
    linkNext () {
      return `/blog/posts/${this.paginationData.next}`
    }
  },
  mounted () {
    this.posts.forEach((e, i) => {
      const index = i + 1
      if (e.link === this.current) {
        this.paginationData.prev = index === 0 ? 0 : index - 1
        this.paginationData.next = index === this.posts.length ? this.posts.length : index + 1
      }
    })
  },
  methods: {}
}
</script>

<style lang="scss">
.blog-pagination {
  justify-content: space-between;

  position: relative;

  display: flex;

  padding-top: 52px;

  &__prev {

    &:before {
      @include pseudoElement(20px, 'Arrow.svg');
      position: relative;

      margin-right: 15px;

      transform: rotate(-135deg);
      @include breakpoint($phone__all) {
        @include pseudoElement(15px, 'Arrow.svg');
        position: relative;
      }
    }
  }

  &__next {

    &:after {
      @include pseudoElement(20px, 'Arrow.svg');
      position: relative;

      margin-left: 15px;

      transform: rotate(45deg);
      @include breakpoint($phone__all) {
        @include pseudoElement(15px, 'Arrow.svg');
        position: relative;
      }
    }
  }

  &__button {
    @include h4;
    align-items: center;

    display: flex;

    color: $color__font--primary;

    &--unactive {
      color: gray;

      pointer-events: none;
    }

    @include breakpoint($phone__all) {
      @include body-main;
    }

  }
}
</style>
