<template>
  <header class="header ">

      <div class="header__content container">
        <div class="header__wrap">
          <Logo class="header__logo"/>
          <LayoutNav class="header__navigation"/>
        </div>
        <div class="header__wrap">
          <LangSwitcher/>
          <button class="btn-primary">{{ $t('header.link') }}</button>
        </div>
      </div>

  </header>
</template>

<script>
import Logo from "../reusable/Logo";
import Navigation from "../reusable/Navigation";
import LangSwitcher from "../LangSwitcher";
import LayoutNav from "../reusable/LayoutNav";

export default {
  name: "Header",
  components: {LayoutNav, LangSwitcher, Navigation, Logo},
  data() {
    return {}
  },
}
</script>

<style lang="scss">

</style>
