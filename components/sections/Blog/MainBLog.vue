<template>
  <Section
    v-in-viewport.once
    num-elem
    class="main-blog"
  >
    <h2 slot="title">
      {{ $t('blog.title') }}
    </h2>
    <LinkPrimary
      slot="elem"
      :payload="allPosts.length"
      :link="blogLink.link"
    >
      {{ $t('buttons.call-posts') }}
    </LinkPrimary>
    <div
      slot="content"
      class="main-blog__content"
    >
      <div class="main-blog__posts">
        <PostCard
          v-for="(post,index) of posts"
          :key="index"
          :post="post"
        />
      </div>

      <hr class="divider">
    </div>
  </Section>
</template>

<script>
import Section from '../../reusable/Section'
import LinkPrimary from '../../reusable/buttons/LinkPrimary'
import PostCard from './PostCard'

export default {
  name: 'MainBLog',
  components: { PostCard, LinkPrimary, Section },
  data () {
    return {

    }
  },
  computed: {
    allPosts () {
      return this.$store.state.app.posts
    },
    posts () {
      return this.allPosts.slice(0, 3)
    },
    blogLink () {
      return this.$store.state.app.navigation.blog
    },
  }
}
</script>

<style lang="scss">
@import "assets/scss/sections/main-blog";

</style>
