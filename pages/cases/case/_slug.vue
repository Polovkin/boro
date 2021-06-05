<template>
  <div class="page case">
    <div class="container">
      <section
        id="top"
        v-in-viewport
        class="page__section"
        data-scroll-section
      >
        <div class="page__title">
          <h2>
            {{ caseItem.data.title }}
          </h2>

          <div class="page__tags">
            <ButtonTag
              v-for="(tag,index) of caseItem.tags"
              :key="index"
            >
              {{ $t(`blog.tags.${tag}`) }}
            </ButtonTag>
          </div>

          <hr class="divider">
        </div>

        <div class="page__content">
          <SlugPagination is-case />
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import ButtonTag from '../../../components/reusable/buttons/ButtonTag'
import { pageMixin } from '../../../mixins/page-mixins'
import SlugPagination from '../../../components/sections/SlugPagination'
export default {
  components: { SlugPagination, ButtonTag },
  mixins: [pageMixin],
  computed: {
    caseItem () {
      return this.$store.state.app.cases.filter(e => e.link === this.$route.path)[0]
    }
  }
}
</script>

<style lang="scss">

</style>
