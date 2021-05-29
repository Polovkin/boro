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
      <div class="te4st">
        <PostSection>
          <slot slot="title">
            Ttile
          </slot>
          <slot slot="content">
            content
          </slot>
        </PostSection>
        <PostSection>
          <slot slot="title">
            Ttile
          </slot>
          <slot slot="content">
            content
          </slot>
        </PostSection>
      </div>



    </slot>
  </PageSection>
</template>

<script>
import PageSection from '../../../components/reusable/blog/PageSection'
import { pageMixin } from '../../../mixins/page-mixins'
import ButtonTag from '../../../components/reusable/buttons/ButtonTag'
import BlogPagination from '../../../components/sections/Blog/BlogPagination'
import PostSection from '../../../components/reusable/blog/PostSection'
export default {
  components: { PostSection, BlogPagination, ButtonTag, PageSection },
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
