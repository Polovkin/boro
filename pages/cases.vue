<template>
  <PageSection class="cases">
    <slot slot="title">
      {{ $t('cases.title') }}
    </slot>
    <slot slot="content">
<!--      <ItemsFilter is-case :data="caseItems" />-->

      <hr class="divider">
      <div>

      </div>
    </slot>
  </PageSection>
</template>

<script>
import { mapState } from 'vuex'
import { pageMixin } from '../mixins/page-mixins'
import { CASE_ALL, CASE_WEB_MON, CASE_WEBSITES, CASE_MOTION, CASE_GRAPHICS, CASE_DESIGN_CONCEPTS } from '../store/types'
import PageSection from '../components/sections/Blog/PageSection'
import ItemsFilter from '../components/sections/Blog/ItemsFilter'
import CaseMainItem from '../components/sections/Cases/CaseMainItem'

export default {
  name: 'Blog',
  components: { CaseMainItem, ItemsFilter, PageSection },
  mixins: [pageMixin],
  data () {
    return {
      isShowMore: false,
      caseItems: [
        {
          text: 'All',
          value: '12',
          type: CASE_ALL
        },
        {
          text: 'Team',
          value: '3',
          type: CASE_WEB_MON
        },
        {
          text: 'Events',
          value: '2',
          type: CASE_WEBSITES
        },
        {
          text: 'Design',
          value: '3',
          type: CASE_MOTION
        },
        {
          text: 'Development',
          value: '2',
          type: CASE_GRAPHICS
        },
        {
          text: 'Managment',
          value: '12',
          type: CASE_DESIGN_CONCEPTS
        }
      ]
    }
  },
  computed: {
    ...mapState({
      filterType: s => s.app.blogFilterType,
      posts: s => s.app.posts
    }),
    filteredItems () {
      return this.filterType === CASE_ALL ? this.posts : this.posts.filter(e => (e.type.includes(this.filterType)))
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/blog.scss";
</style>
