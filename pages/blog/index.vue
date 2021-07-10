<template>
  <PageSection class="blog">
    <slot slot="title">
      {{ $t('blog.title') }}
    </slot>
    <slot slot="content">
      <ItemsFilter :data="posts" />
      <div
        :style="`max-height: ${itemHeightCalc}px;`"
        class="blog__posts"
        :class="{'blog__posts--show-more':false}"
      >
        <PostCard
          v-for="(post,index) of filteredItems"
          ref="post"
          :key="index"
          :post="post"
        />
      </div>
      <hr class="divider">
      <button
        v-if="buttonState"
        class="blog__more"
        @click="toggleButton"
      >
        {{ activeItems ? 'show less' : $t('blog.more') }}
      </button>
    </slot>
  </PageSection>
</template>

<script>
import { mapState } from 'vuex'
import ItemsFilter from '../../components/sections/ItemsFilter'
import { pageMixin } from '../../mixins/page-mixins'
import PostCard from '../../components/sections/Blog/PostCard'
import { TAG_ALL } from '../../store/types'
import PageSection from '../../components/sections/PageSection'
import { slugMixin } from '../../mixins/slug-index-mixin'

export default {
  name: 'Blog',
  components: { ItemsFilter, PageSection, PostCard },
  mixins: [pageMixin, slugMixin],
  data () {
    return {
      itemsRows: this.$device.isDesktop ? 2 : 4
    }
  },
  computed: {
    ...mapState({
      posts: s => s.app.posts
    }),
    buttonState () {
      return this.$device.isDesktop ? Math.round(this.itemsQuantity / this.itemsRows) > 2 : this.itemsQuantity > 4
    },
    filteredItems () {
      return this.filterType === TAG_ALL ? this.posts : this.posts.filter(e => (e.tags.includes(this.filterType)))
    }
  },
  mounted () {
    this.item = this.$refs.post
    this.itemHeight = this.item[0].$el.clientHeight + 64
    this.itemsQuantity = this.item.length
  },
  methods: {
    toggleButton () {
      if (this.activeItems) {
        this.activeItems = false
        this.itemsRows = this.$device.isDesktop ? 2 : 4
      } else {
        this.activeItems = true
        this.itemsRows = this.$device.isDesktop ? Math.round(this.item.length / 3) : this.item.length
      }
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/blog.scss";
</style>
