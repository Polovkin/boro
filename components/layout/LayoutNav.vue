<template>
  <ul>
    <li v-for="item of navs">
      <nuxt-link :to="item.link">
        {{ $t(item.name) }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LayoutNav',
  data () {
    return {
      navs: [
        { name: 'layout-links.link1', link: '/' },
        { name: 'layout-links.link2', link: '/' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
