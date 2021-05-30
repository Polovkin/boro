<template>
  <div class="page post">
    <div class="container">
      <section
        id="top"
        v-in-viewport
        class="page__section"
        data-scroll-section
      >
        <div class="page__title">
          <h2>
            {{ post.data.title }}
          </h2>

          <div class="post__tags">
            <ButtonTag
              v-for="(tag,index) of post.tags"
              :key="index"
            >
              {{ tag }}
            </ButtonTag>
          </div>

          <hr class="divider">
        </div>

        <div class="page__content">
          <PostSection>
            <slot slot="title">
              Ttile
            </slot>
            <slot slot="content">
              content
            </slot>
          </PostSection>
        </div>
        <BlogPagination :current="$route.path" />
      </section>
    </div>
  </div>
</template>

<script>
import { pageMixin } from '../../../mixins/page-mixins'
import ButtonTag from '../../../components/reusable/buttons/ButtonTag'
import PostSection from '../../../components/sections/Blog/PostSection'
import BlogPagination from '../../../components/sections/Blog/BlogPagination'
export default {
  components: { BlogPagination, PostSection, ButtonTag },
  mixins: [pageMixin],

  computed: {
    post () {
      return this.$store.state.app.posts.filter(e => e.link === this.$route.path)[0]
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/post.scss";
</style>
