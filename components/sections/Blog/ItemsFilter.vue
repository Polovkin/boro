<template>
  <div class="blog__filter" :class="{'blog__filter--active':filterState }">
    <button
      :class="{'blog__filter-item--active':filterState}"
      class="blog__filter-toggle blog__filter-item"
      @click="openFilter"
    >
      <span>{{ data[0].text }}</span>
      <span class="blog__filter-toggle-wrap">
        <span class="blog__filter-item-value">{{ data[0].value }}</span>
        <span class="arrow" />
      </span>
    </button>
    <ul
      class="blog__filter-list"
    >
      <li
        v-for="(item,index) of data"
        :key="index"
        :class="{'blog__filter-item--active':index===active || filterState}"
        class="blog__filter-item"
        @click="filteredTypes(index,item.type)"
      >
        <span> {{ item.text }}</span>
        <span class="blog__filter-item-value">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ItemsFilter',
  props: {
    data: {
      type: Array,
      default: null
    },
    isBlog: {
      type: Boolean,
      default: false
    },
    isCase: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: 0,
      filterState: false
    }
  },
  mounted () {
    console.log(this.data)
  },
  methods: {
    openFilter () {
      this.filterState = !this.filterState
    },
    filteredTypes (index, type) {
      if (this.isBlog) {
        this.$store.commit('app/SET_POST_TYPE', type)
      }
      if (this.isCase) {
        this.$store.commit('app/SET_CASE_TYPE', type)
      }
      this.active = index
    }
  }
}
</script>

<style lang="scss">

</style>
