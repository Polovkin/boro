<template>
  <section v-in-viewport class="case-section">
    <h3 class="case-section__title" v-html="data.heading" />
    <p class="case-section__description" v-html="data.description" />
    <div class="case-section__content">
      content
    </div>
    <hr class="divider">
  </section>
</template>

<script>
export default {
  name: 'CasePresentation',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/components/case-presentation";
</style>
