<template>
  <Section :title="`Cases`">
    <div slot="content"></div>
  </Section>
</template>

<script>
import Section from "../reusable/Section";
export default {
  name: "Cases",
  components: {Section}
}
</script>

<style lang="scss">
@import "/assets/scss/sections/cases";
</style>
