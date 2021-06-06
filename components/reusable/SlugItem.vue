<template>
  <main :class="slugClass" class="page">
    <div class="container">
      <section
        id="top"
        v-in-viewport
        class="page__section"
        data-scroll-section
      >
        <slot name="title" />

        <div class="page__content">
          <slot name="content" />
        </div>
        <footer>
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
          <SlugPagination :is-blog="isBlog" :is-case="isCase" />
        </footer>
      </section>
    </div>
  </main>
</template>

<script>
import ButtonTag from '../reusable/buttons/ButtonTag'
import ButtonToTop from '../reusable/buttons/ButtonToTop'
import SlugPagination from '../sections/SlugPagination'
import { pageMixin } from '../../mixins/page-mixins'

export default {
  name: 'SlugItem',
  components: { ButtonToTop, SlugPagination, ButtonTag },
  mixins: [pageMixin],
  props: {
    isBlog: {
      type: Boolean,
      default: false
    },
    isCase: {
      type: Boolean,
      default: false
    },
    slugClass: {
      type: String,
      default: ''
    }
  },
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
  }
}
</script>

<style scoped>

</style>
