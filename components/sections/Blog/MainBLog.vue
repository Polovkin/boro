<template>
  <Section
    v-in-viewport
    num-elem
    class="main-blog"
  >
    <h2 slot="title">
      {{ $t('blog.title') }}
    </h2>
    <LinkPrimary
      slot="elem"
      :payload="'24'"
      link="/"
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
import LinkPrimary from '../../reusable/LinkPrimary'
import PostCard from './PostCard'

export default {
  name: 'MainBLog',
  components: { PostCard, LinkPrimary, Section },
  data () {
    return {

    }
  },
  computed: {
    posts () {
      return this.$store.state.app.posts.slice(0, 3)
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/sections/main-blog";

</style>
