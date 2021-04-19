<template>
  <header class="header container">
    <div class="header__content">
      <div class="header__wrap">
        <Logo class="header__logo"/>
        <ul class="header__navigation">
          <li class="header__navigation-item"
              v-for="item of navs">
            <nuxt-link class="header__navigation-link"
                       :to="item.link">
              {{ $t(item.name) }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="header__wrap">
        <!--        <LanguageInput/>-->
        <p class="header__lang body-secondary">Eng</p>
        <button class="btn-primary">{{ $t('header.link') }}</button>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "../reusable/Logo";
import Navigation from "../reusable/Navigation";
import LanguageInput from "../LanguageInput";

export default {
  name: "Header",
  components: {LanguageInput, Navigation, Logo},
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

<style lang="scss">
@import 'assets/scss/core/headings';

.header {
  &__lang {
    margin-right: 62px;
  }

  &__navigation {
    align-items: center;

    display: flex;

    &-item {
      margin-right: 12px;
    }

    &-link {
      @extend .body-secondary;
      color: $color__font--tertiary;
    }
  }

  &__content {
    justify-content: space-between;

    display: flex;
  }

  &__wrap {
    display: flex;
    align-items: center;
  }

  &__logo {
    position: relative;
    top: 3px;
  }

  &__navigation {
    margin-left: 76px;
  }
}
</style>
