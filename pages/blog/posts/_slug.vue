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
          <div
            v-in-viewport
            class="post-section "
          >
            <div class="post__header">
              <UserInfo :data="post.author" />
              <p class="post__header-time">
                {{ post.data.readTime }} {{ $t('blog.time') }}
              </p>
            </div>
            <div class="post__header-img">
              <img
                :src="post.data.img"
                :alt="post.data.title"
              >
            </div>
            <hr class="divider">
          </div>
          <PostSection
            v-for="(content,index) of post.data.content"
            :key="index"
            :class="{'post-section__last':index===post.data.content.length - 1}"
            :data="content"
          />
          <div />
          <div class="post-section post-section__footer">
            <div>
              <p>{{ $t('blog.share') }}</p>
              <div class="post-section__footer-tags">
                <ButtonTag
                  v-for="(link,index) of share"
                  :key="index"
                  :link="link.link"
                >
                  {{ link.name }}
                </ButtonTag>
              </div>
            </div>
            <div>
              <ButtonToTop />
            </div>
            <hr class="divider">
          </div>
          <BlogPagination :current="$route.path" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { pageMixin } from '../../../mixins/page-mixins'
import ButtonTag from '../../../components/reusable/buttons/ButtonTag'
import PostSection from '../../../components/sections/Blog/PostSection'
import BlogPagination from '../../../components/sections/Blog/BlogPagination'
import UserInfo from '../../../components/reusable/UserInfo'
import ButtonToTop from '../../../components/reusable/buttons/ButtonToTop'

export default {
  components: { ButtonToTop, UserInfo, BlogPagination, PostSection, ButtonTag },
  mixins: [pageMixin],
  data () {
    return {
      share: [
        {
          name: 'Facebook',
          link: '/'
        },
        {
          name: 'Twitter',
          link: '/'
        },
        {
          name: 'LinkedIn',
          link: '/'
        }
      ]
    }
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
