<template>
  <div
    id="page_filter"
    class="blog__filter"
    :class="{'blog__filter--active':filterState }"
  >
    <button
      :class="{'blog__filter-item--active':filterState}"
      class="blog__filter-toggle"
      @click="openFilter"
    >
      <span>{{ $t(`blog.tags.${activeTag}`) }}</span>
      <span class="blog__filter-toggle-wrap">
        <span class="blog__filter-item-value">{{ activeTagValue }}</span>
        <span class="arrow" />
      </span>
    </button>
    <ul
      class="blog__filter-list"
    >
      <li
        :class="{'blog__filter-item--active':active===0}"
        class="blog__filter-item"
        @click="filteredTypes(0,tagAll)"
      >
        <span> {{ $t(`blog.tags.${tagAll}`) }}</span>
        <span class="blog__filter-item-value">{{ data.length }}</span>
      </li>
      <li
        v-for="(item,index) of postsTypes"
        :key="index"
        :class="{'blog__filter-item--active':index+1===active || filterState}"
        class="blog__filter-item"
        @click="filteredTypes(index+1,item)"
      >
        <span> {{ $t(`blog.tags.${item}`) }}</span>
        <span class="blog__filter-item-value">{{ typeQuantity(item) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { TAG_ALL } from '../../store/types'

export default {
  name: 'ItemsFilter',
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      tagAll: TAG_ALL,
      activeTag: TAG_ALL,
      active: 0,
      filterState: false
    }
  },
  computed: {
    activeTagValue: {
      get () {
        return this.active ? this.data.filter(e => e.tags.includes(this.activeTag)).length : this.data.length
      },
      set(arr) {
        return arr
      }
    },
    postsTypes () {
      const arr = []
      this.data.forEach(e => e.tags.forEach((t) => {
        if (!arr.includes(t)) {
          arr.push(t)
        }
      }))
      return arr
    }
  },
  methods: {
    openFilter () {
      this.filterState = !this.filterState
    },
    typeQuantity (type) {
      const arr = this.data.filter(e => e.tags.includes(type))
      return arr.length
    },
    filteredTypes (index, type) {
      this.activeTagValue =
          this.$store.commit('filter/SET_FILTER_TYPE', type)
      this.active = index
      this.activeTag = type
      this.filterState = false
    }
  }
}
</script>

<style lang="scss">

</style>
