<template>
  <PageSection class="cases">
    <slot slot="title">
      {{ $t('cases.title') }}
    </slot>
    <slot slot="content">
      <ItemsFilter :data="cases" />
      <CaseMainItem
        v-for="(item,index) of filteredItems"
        :key="index"
        :data="item"
      />
      <hr class="divider">
      <div />
    </slot>
  </PageSection>
</template>

<script>
import { mapState } from 'vuex'
import { pageMixin } from '../mixins/page-mixins'
import { TAG_ALL } from '../store/types'
import PageSection from '../components/sections/Blog/PageSection'
import ItemsFilter from '../components/sections/Blog/ItemsFilter'
import CaseMainItem from '../components/sections/Cases/CaseMainItem'

export default {
  name: 'Blog',
  components: { CaseMainItem, ItemsFilter, PageSection },
  mixins: [pageMixin],
  data () {
    return {
      isShowMore: false
    }
  },
  computed: {
    ...mapState({
      filterType: s => s.filter.filterType,
      cases: s => s.app.cases
    }),
    filteredItems () {
      return this.filterType === TAG_ALL ? this.cases : this.cases.filter(e => (e.tags.includes(this.filterType)))
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/blog.scss";
</style>
