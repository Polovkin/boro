<template>
  <Section
    num-elem
    class="cases-section"
  >
    <h2 slot="title">
      {{ $t('cases.title') }}
    </h2>
    <LinkPrimary
      slot="elem"
      :payload="'24'"
      :link="localePath($store.state.app.navigation.cases.link)"
    >
      {{ $t('buttons.call-projects') }}
    </LinkPrimary>
    <div
      slot="content"
      class="cases-section__items"
    >
      <CaseMainItem
        v-for="(item,index) of cases"
        :key="index"
        :data="item"
      />
      <hr v-in-viewport.once class="divider">
    </div>
  </Section>
</template>

<script>
import Section from '../../reusable/Section'
import LinkPrimary from '../../reusable/buttons/LinkPrimary'
import { TAG_ALL } from '../../../store/types'
import CaseMainItem from './CaseMainItem'

export default {
  name: 'Cases',
  components: { CaseMainItem, LinkPrimary, Section },
  data () {
    return {
      // cases: null
    }
  },
  /* async fetch () {
    const response = await this.$axios.get('/api/cases')
    this.cases = response.data
  }, */
  computed: {
    cases () {
      return this.$store.state.app.cases
    }
  },
  mounted () {
    this.$store.commit('filter/SET_FILTER_TYPE', TAG_ALL)
  }
}
</script>

<style lang="scss">

.cases-section {
  padding-top: 25px;

  &__items {
    padding-top: 190px;
    @include breakpoint($phone__all) {
      padding-top: 0;
    }
  }
}

</style>
