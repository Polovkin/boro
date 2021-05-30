<template>
  <PageSection class="cases">
    <slot slot="title">
      {{ $t('cases.title') }}
    </slot>
    <slot slot="content">
      <BlogFilter />

      <hr class="divider">
      <button
        class="blog__more"
        @click="showMore"
      >
        {{ $t('blog.more') }}
      </button>
    </slot>
  </PageSection>
</template>

<script>
import { mapState } from 'vuex'
import BlogFilter from '../components/sections/Blog/BlogFilter'
import { pageMixin } from '../mixins/page-mixins'
import { POST_ALL } from '../store/types'
import PageSection from '../components/sections/Blog/PageSection'

export default {
  name: 'Blog',
  components: { PageSection, BlogFilter },
  mixins: [pageMixin],
  data () {
    return {
      isShowMore: false
    }
  },
  computed: {
    ...mapState({
      filterType: s => s.app.blogFilterType,
      posts: s => s.app.posts
    }),
    filteredItems () {
      return this.filterType === POST_ALL ? this.posts : this.posts.filter(e => (e.type.includes(this.filterType)))
    }
  },
  methods: {
    showMore () {
      this.isShowMore = !this.isShowMore
      setTimeout(() => {
        this.$nuxt.$emit('update-locomotive')
        const data = {
          target: '.blog__title',
          options: ''
        }
        if (!this.isShowMore) {
          this.$nuxt.$emit('scroll-locomotive', data)
        }
      }, 500)
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/blog.scss";
</style>
