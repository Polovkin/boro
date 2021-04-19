<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"
          v-for="item of navs">
        <nuxt-link class="navigation__link body-secondary"
                   :to="item.link">
          {{ $t(item.name) }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navs: [
        {name: 'navigation1', link: '/'},
        {name: 'navigation2', link: '/'}
      ]
    }
  },
}
</script>

<style scoped
       lang="scss">
.navigation {
  display: flex;
  align-items: center;

  &__list {
    display: flex;
  }

  &__item {
    margin-right: 43px;
  }

  &__link {
    color: $color__font--tertiary
  }
}
</style>
