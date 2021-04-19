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
        {name: 'navigation.link1', link: '/'},
        {name: 'navigation.link2', link: '/'},
        {name: 'navigation.link3', link: '/'},
        {name: 'navigation.link4', link: '/'},
        {name: 'navigation.link5', link: '/'}
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
    flex-direction: column;
    align-items: flex-end;
  }

  &__item {

    margin-right: 43px;
  }

  &__link {
    @include title-link;
    color: $color__font--primary
  }
}
</style>
