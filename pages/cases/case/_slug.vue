<template>
  <div class="page case">
    <div class="container">
      <section
        id="top"
        v-in-viewport
        class="page__section"
        data-scroll-section
      >
        <div class=" case__heading">
          <h2>
            {{ caseItem.data.title }}
          </h2>
          <div class="case__button">
            <ButtonPrimary>Behance</ButtonPrimary>
          </div>

          <div class="case__tags">
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
          <div class="case__main">
            <div class="case__main-team">
              <UserInfo v-for="(user,i) of caseItem.data.team" :key="i" :data="user" />
            </div>
            <div class="case__main-img">
              <nuxt-picture
                width="326"
                height="249"
                :src="caseItem.data.img"
              />
            </div>
          </div>
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
import ButtonPrimary from '../../../components/reusable/buttons/ButtonPrimary'
import UserInfo from '../../../components/reusable/UserInfo'
export default {
  components: { UserInfo, ButtonPrimary, SlugPagination, ButtonTag },
  mixins: [pageMixin],
  computed: {
    caseItem () {
      return this.$store.state.app.cases.filter(e => e.link === this.$route.path)[0]
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/sections/case";
</style>
