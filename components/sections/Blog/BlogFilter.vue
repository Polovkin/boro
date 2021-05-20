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
import { POST_ALL, POST_DESIGN, POST_TEAM, POST_DEVELOPMENT, POST_EVENTS, POST_MANAGMENT } from '../../../store/types'

export default {
  name: 'BlogFilter',
  data () {
    return {
      active: 0,
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
    filteredTypes (index, type) {
      this.$store.commit('app/SET_POST_TYPE', type)
      this.active = index
    }
  }
}
</script>

<style lang="scss">

</style>
