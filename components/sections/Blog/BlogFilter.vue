<template>
  <div class="blog__filter" :class="{'blog__filter--active':filterState }">
    <button
      :class="{'blog__filter-item--active':filterState}"
      class="blog__filter-toggle blog__filter-item"
      @click="openFilter"
    >
      <span>{{ filterItems[0].text }}</span>
      <span class="blog__filter-toggle-wrap">
        <span class="blog__filter-item-value">{{ filterItems[0].value }}</span>
        <span class="arrow" />
      </span>
    </button>
    <ul
      class="blog__filter-list"
    >
      <li
        v-for="(item,index) of filterItems"
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
import { mapState } from 'vuex'
import { POST_ALL, POST_DESIGN, POST_TEAM, POST_DEVELOPMENT, POST_EVENTS, POST_MANAGMENT } from '../../../store/types'

export default {
  name: 'BlogFilter',
  data () {
    return {
      active: 0,
      filterState: false,
      filterItems: [
        {
          text: 'All',
          value: '12',
          type: POST_ALL
        },
        {
          text: 'Team',
          value: '3',
          type: POST_TEAM
        },
        {
          text: 'Events',
          value: '2',
          type: POST_EVENTS
        },
        {
          text: 'Design',
          value: '3',
          type: POST_DESIGN
        },
        {
          text: 'Development',
          value: '2',
          type: POST_DEVELOPMENT
        },
        {
          text: 'Managment',
          value: '12',
          type: POST_MANAGMENT
        }
      ]
    }
  },

  methods: {
    openFilter () {
      this.filterState = !this.filterState
    },
    filteredTypes (index, type) {
      this.$store.commit('app/SET_POST_TYPE', type)
      this.active = index
    }
  }
}
</script>

<style lang="scss">

</style>
