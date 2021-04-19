<template>
  <header>
    <LanguageInput/>

      <nuxt-link :to="localePath('index')">home</nuxt-link>
      <nuxt-link :to="localePath('about')">{{ $t('about') }}</nuxt-link>
<!--      <a href="/users">Users</a>-->

  </header>
</template>

<script>
import LanguageInput from "../LanguageInput";
export default {
  name: "Navbar",
  components: {LanguageInput},
}
</script>

<style>
.polova {
    color: red !important;
}
</style>
