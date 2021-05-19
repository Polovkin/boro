<template>
  <div class="blog__filter">
    <ul class="blog__filter-list">
      <li
        v-for="(item,index) of filterItems"
        :key="index"
        :class="{'blog__filter-item--active':index===active}"
        class="blog__filter-item"
        @click="filteredTypes(index,item.type)"
      >
        <span> {{ item.text }}</span>
        <span>{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { FILTER_ALL, FILTER_DESIGN, FILTER_TEAM, FILTER_DEVELOPMENT, FILTER_EVENTS, FILTER_MANAGMENT } from '../../../store/types'

export default {
  name: 'BlogFilter',
  data () {
    return {
      active: 0,
      filterItems: [
        {
          text: 'All',
          value: '12',
          type: FILTER_ALL
        },
        {
          text: 'Team',
          value: '3',
          type: FILTER_TEAM
        },
        {
          text: 'Events',
          value: '2',
          type: FILTER_EVENTS
        },
        {
          text: 'Design',
          value: '3',
          type: FILTER_DESIGN
        },
        {
          text: 'Development',
          value: '2',
          type: FILTER_DEVELOPMENT
        },
        {
          text: 'Managment',
          value: '12',
          type: FILTER_MANAGMENT
        }
      ]
    }
  },

  methods: {
    filteredTypes (index, type) {
      this.$store.commit('app/SET_FILTER_TYPE', type)
      this.active = index
    }
  }
}
</script>

<style lang="scss">

</style>
