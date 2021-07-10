<template>
  <SlugItem is-blog>
    <slot slot="title">
      <header v-in-viewport.once class="page__title">
        <div class="animation-mask">
          <h1>
            {{ post.data.title }}
          </h1>
        </div>
        <div class="page__tags">
          <div class="animation-move-from-left">
            <ButtonTag
              v-for="(tag,index) of post.tags"
              :key="index"
            >
              {{ $t(`blog.tags.${tag}`) }}
            </ButtonTag>
          </div>
        </div>
        <hr class="divider">
      </header>
    </slot>
    <slot slot="content">
      <div
        v-in-viewport.once
        class="post-section"
      >
        <div class="post__header">
          <UserInfo :data="post.author" />
          <p class="post__header-time">
            {{ post.data.readTime }} {{ $t('blog.time') }}
          </p>
        </div>
        <div class="post__header-img">
          <nuxt-picture
            :src="post.data.img"
            :alt="post.data.title"
          />
        </div>
        <hr class="divider">
      </div>
      <PostSection
        v-for="(content,index) of post.data.content"
        :key="index"
        :class="{'post-section__last':index===post.data.content.length - 1}"
        :data="content"
      />
    </slot>
  </SlugItem>
</template>

<script>
import PostSection from '../../../components/sections/Blog/PostSection'
import UserInfo from '../../../components/reusable/UserInfo'
import SlugItem from '../../../components/reusable/SlugItem'
import ButtonTag from '../../../components/reusable/buttons/ButtonTag'

export default {
  components: { ButtonTag, UserInfo, PostSection, SlugItem },

  data () {
    return {}
  },
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
