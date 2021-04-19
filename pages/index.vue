<template>

</template>

<script>




export default {
  components: {

  },
  data() {
    return {
      name: '',
      textarea: ''
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
$areas: block1 block2 block3 block4;
.block_wrap {
  background-image: url('/icons/eye.svg?data');
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
