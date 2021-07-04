<template>
  <PageSection class="cases">
    <slot slot="title">
      {{ $t('cases.title') }}
    </slot>
    <slot slot="content">
      <ItemsFilter :data="cases" />
      <div
        class="case__items"
        :class="{'case__items--show-more':isShowMore}"
      >
        <CaseMainItem
          v-for="(item,index) of filteredItems"
          :key="index"
          :data="item"
        />
      </div>
      <hr class="divider">
      <button
        class="blog__more"
        @click="showMore"
      >
        {{ $t('blog.more') }}
      </button>
      <div />
    </slot>
  </PageSection>
</template>

<script>
import { mapState } from 'vuex'
import { pageMixin } from '../../mixins/page-mixins'
import { slugMixin } from '../../mixins/slug-index-mixin'
import { TAG_ALL } from '../../store/types'
import PageSection from '../../components/sections/PageSection'
import ItemsFilter from '../../components/sections/ItemsFilter'
import CaseMainItem from '../../components/sections/Cases/CaseMainItem'

export default {
  name: 'Blog',
  components: { CaseMainItem, ItemsFilter, PageSection },
  mixins: [pageMixin, slugMixin],
 /* async asyncData (context) {
    const response = await context.app.$axios.get('/api/cases')
    const cases = response.data
    return { cases }
  },*/

  computed: {
    ...mapState({
      filterType: s => s.filter.filterType
    }),
    cases () {
      return this.$store.state.app.cases
    },
    filteredItems () {
      return this.filterType === TAG_ALL ? this.cases : this.cases.filter(e => (e.tags.includes(this.filterType)))
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/blog.scss";
</style>
