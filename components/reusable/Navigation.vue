<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"
          v-for="item of navs">
        <LinkPrimary :link="item.link"
                     class="navigation__link">
          {{ $t(item.name) }}
        </LinkPrimary>
      </li>
    </ul>
  </nav>
</template>

<script>
import LinkPrimary from "./LinkPrimary";

export default {
  name: "Navigation",
  components: {LinkPrimary},
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

    color: $color__font--primary
  }
}
</style>
