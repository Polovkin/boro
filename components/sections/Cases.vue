<template>
  <Section num-elem
           class="cases-section"
           :title="`Cases`">
    <LinkPrimary :payload="24" slot="elem"
                 link="/">All projects
    </LinkPrimary>
    <div slot="content">content</div>
  </Section>
</template>

<script>
import Section from "../reusable/Section";
import LinkPrimary from "../reusable/LinkPrimary";

export default {
  name: "Cases",
  components: {LinkPrimary, Section}
}
</script>

<style lang="scss">
@import "/assets/scss/sections/cases";
</style>
