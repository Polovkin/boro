<template>
  <div class="page blog">
    <div class="container">
      <section
        id="top"
        v-in-viewport
        class="blog__section"
        data-scroll-section
      >
        <h2 class="blog__title">
          {{ $t('blog.title') }}
        </h2>
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
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BlogFilter from '../components/sections/Blog/BlogFilter'
import { pageMixin } from '../mixins/page-mixins'
import PostCard from '../components/sections/Blog/PostCard'
import { FILTER_ALL } from '../store/types'
import MainSection from '../components/sections/MainSection'

export default {
  name: 'Blog',
  components: { MainSection, PostCard, BlogFilter },
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
      return this.filterType === FILTER_ALL ? this.posts : this.posts.filter(e => (e.type.includes(this.filterType)))
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
