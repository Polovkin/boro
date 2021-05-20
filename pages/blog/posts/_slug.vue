<template>
  <PageSection class="post">
    <slot slot="title">
      {{ post.data.title }}
    </slot>
    <slot slot="elem">
      <div class="post__tags">
        <ButtonTag
          v-for="(tag,index) of post.tags"
          :key="index"
        >
          {{ tag }}
        </ButtonTag>
      </div>
    </slot>
    <slot slot="content">
      <BlogPagination :current="$route.path" />
    </slot>
  </PageSection>
</template>

<script>
import PageSection from '../../../components/reusable/PageSection'
import { pageMixin } from '../../../mixins/page-mixins'
import ButtonTag from '../../../components/reusable/buttons/ButtonTag'
import BlogPagination from '../../../components/sections/Blog/BlogPagination'
export default {
  components: { BlogPagination, ButtonTag, PageSection },
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
