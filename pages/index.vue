<template>

  <section>
    <h1>i18n</h1>
    <h1 class="title">{{ $t('message') }}</h1>
    <div class="block_wrap">
      <div class="block"></div>
    </div>
    <nuxt-picture loading="lazy" src="/1-1.png" />
    <br>

  </section>


</template>

<script>


import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
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
.block_wrap {

  display: flex;
  align-items: center;
  justify-content: center;
  @include size(500px);
}
.block {
  @include size(300px);
  background: $color__dark_16;
}

</style>
