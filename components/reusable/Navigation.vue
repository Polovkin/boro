<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="(item,index) of navs"
        :key="index"
        class="navigation__item"
      >
        <LinkPrimary
          :link="item.link"
          class="navigation__link"
        >
          {{ $t(item.name) }}
        </LinkPrimary>
      </li>
    </ul>
  </nav>
</template>

<script>
import LinkPrimary from './LinkPrimary'

export default {
  name: 'Navigation',
  components: { LinkPrimary },
  data () {
    return {
      navs: [
        { name: 'navigation.link1', link: '/' },
        { name: 'navigation.link2', link: '/' },
        { name: 'navigation.link3', link: '/' },
        { name: 'navigation.link4', link: '/' },
        { name: 'navigation.link6', link: '/' }
      ]
    }
  }
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
    margin-bottom: 1px;
    &:last-child {
      margin-top:12px;
    }
  }

  &__link {
    color: $color__font--primary
  }
}
</style>
