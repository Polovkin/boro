<template>
  <div v-in-viewport class="slug-pagination">
    <nuxt-link
      :to="linkPrev"
      class="slug-pagination__button slug-pagination__prev animation-move-from-right"
      :class="{'slug-pagination__button--unactive':!paginationData.prev}"
    >
      {{ $t(`${isBlog ? 'blog.post' : 'cases.case'}.prev`) }}
    </nuxt-link>
    <nuxt-link
      :class="{'slug-pagination__button--unactive':paginationData.next ===navData.length + 1}"
      :to="linkNext"
      class="slug-pagination__button slug-pagination__next animation-move-from-left"
    >
      {{ $t(`${isBlog ? 'blog.post' : 'cases.case'}.next`) }}
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SlugPagination',
  props: {
    isBlog: {
      type: Boolean,
      default: false
    },
    isCase: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // cases: [],
      navData: [],
      url: '',
      paginationData: {
        prev: null,
        next: null
      }
    }
  },
  /*  async fetch () {
    const response = await this.$axios.get('/api/cases')
    this.cases = response.data
  }, */
  computed: {
    ...mapState({
      posts: s => s.app.posts
    }),
    cases () {
      return this.$store.state.app.cases
    },
    linkPrev () {
      this.setLinks()
      return this.url + this.paginationData.prev
    },
    linkNext () {
      this.setLinks()
      return this.url + this.paginationData.next
    }

  },
  methods: {
    setLinks () {
      this.navData = this.isBlog ? this.posts : this.cases
      this.navData.forEach((e, i) => {
        const index = i + 1
        if (e.link === this.$route.path) {
          this.paginationData.prev = index - 1
          this.paginationData.next = index + 1
        }
      })
    }
  }
}
</script>

<style lang="scss">
.slug-pagination {
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
      &:after,&:before {
        filter: invert(.5);
      }
    }

    @include breakpoint($phone__all) {
      @include body-main;
    }

  }
}
</style>
