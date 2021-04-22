<template>
  <Section
    num-elem
    class="main-about"
    :title="`We work in close collaboration with the customer's business to create the most successful product`"
  >
    <LinkPrimary
      slot="elem"
      link="/"
    >
      About us
    </LinkPrimary>
    <div
      slot="content"
      class="main-about__content"
    >
      content
    </div>
  </Section>
</template>

<script>
import Section from '../reusable/Section'
import LinkPrimary from '../reusable/LinkPrimary'

export default {
  name: 'MainAbout',
  components: { LinkPrimary, Section }
}
</script>

<style scoped>

</style>
