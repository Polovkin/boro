<template>
  <main :class="slugClass" class="page">
    <div class="container">
      <section
        id="top"
        class="page__section"
        data-scroll-section
      >
        <slot name="title" />

        <div class="page__content">
          <slot name="content" />
        </div>
        <footer>
          <div v-in-viewport class="page__footer">
            <div class="animation-move-from-right">
              <p>{{ $t('blog.share') }}</p>
              <div class="page__tags">
                <ButtonTag
                  v-for="(link,index) of share"
                  :key="index"
                  :link="link.link"
                >
                  {{ link.name }}
                </ButtonTag>
              </div>
            </div>
            <div class="animation-move-from-left">
              <ButtonToTop />
            </div>
          </div>
          <hr class="divider">
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
  methods: {
    refreshLocomotive() {
      console.log('visible');
      this.$store.commit('app/SET_LOCOMOTIVE')
    }
  },
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
