<template>

  <section>
    <h1>i18n</h1>
    <h1 class="title">{{ $t('message') }}</h1>
    <nuxt-link to="/about">{{ $t('about') }}</nuxt-link>
    <br>
    <LanguageInput/>
  </section>


</template>

<script>

import Input from '~/components/customInput/Input'
import Navbar from '~/components/Navbar'
import ButtonWave from '~/components/ButtonWave'
import InputAnimate from '~/components/InputAnimate'
import LanguageInput from "../components/LanguageInput";

export default {
  components: {
    LanguageInput,
    Navbar, InputAnimate, ButtonWave, Input
  },
  data() {
    return {
      name: '',
      textarea: ''
    }
  },
  methods: {
    sendForm() {
      const formData = new FormData(this.$refs.form)

      for (const key of formData.keys()) {
        console.log(key)
      }
    }
  }
}
</script>
<style lang="scss">
$areas: block1 block2 block3 block4;

.block {
  @include breakpoint($desktop__all) {

  }
}

</style>
