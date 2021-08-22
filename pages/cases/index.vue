<template>
  <PageSection class="cases">
    <slot slot="title">
      {{ $t('cases.title') }}
    </slot>
    <slot slot="content">
      <ItemsFilter :data="cases" />
      <div
        :style="`max-height: ${itemHeightCalc}px;`"
        class="case__items"
        :class="{'case__items--show-more':false}"
      >
        <CaseMainItem
          v-for="(item,index) of filteredItems"
          ref="case"
          :key="index"
          :data="item"
        />
      </div>
      <hr class="divider">
      <button
        v-if="itemsQuantity > 4"
        class="blog__more"
        @click="toggleButton"
      >
        {{ activeItems ? $t('blog.hide') : $t('blog.more') }}
      </button>
      <div />
    </slot>
  </PageSection>
</template>

<script>
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
  data () {
    return {
      itemsRows: 4
    }
  },
  computed: {
    cases () {
      return this.$store.state.app.cases
    },
    filteredItems () {
      return this.filterType === TAG_ALL ? this.cases : this.cases.filter(e => (e.tags.includes(this.filterType)))
    },
    itemHeightCalc () {
      return this.itemHeight * this.itemsRows
    }
  },
  mounted () {
    this.item = this.$refs.case
    this.itemHeight = this.item[0].$el.clientHeight
    this.itemsQuantity = this.item.length
  },
  methods: {
    toggleButton () {
      if (this.activeItems) {
        this.activeItems = false
        this.itemsRows = 4
        this.scrollToFilter()
      } else {
        this.activeItems = true
        this.itemsRows = this.item.length
      }
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/blog.scss";
</style>
