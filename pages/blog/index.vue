<template>
  <PageSection class="blog">
    <slot slot="title">
      {{ $t('blog.title') }}
    </slot>
    <slot slot="content">
      <BlogFilter />
      <div
        class="blog__posts"
        :class="{'blog__posts--show-more':isShowMore}"
      >
        <PostCard
          v-for="(post,index) of filteredItems"
          :key="index"
          :post="post"
        />
      </div>
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
import BlogFilter from '../../components/sections/Blog/BlogFilter'
import { pageMixin } from '../../mixins/page-mixins'
import PostCard from '../../components/sections/Blog/PostCard'
import { POST_ALL } from '../../store/types'
import MainSection from '../../components/sections/MainSection'
import PageSection from '../../components/reusable/blog/PageSection'

export default {
  name: 'Blog',
  components: { PageSection, MainSection, PostCard, BlogFilter },
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
