<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="(item,index) of navs"
        :key="index"
        class="navigation__item"
      >
        <LinkPrimary
          :is-static="isStatic"
          :link="localePath(item.link)"
          class="navigation__link"
        >
          {{ $t(item.name) }}
        </LinkPrimary>
      </li>
    </ul>
  </nav>
</template>

<script>
import LinkPrimary from './buttons/LinkPrimary'

export default {
  name: 'Navigation',
  components: { LinkPrimary },
  props: {
    isStatic: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    navs () {
      return this.$store.state.app.navigation
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
