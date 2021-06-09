<template>
  <SlugItem is-case>
    <slot slot="title">
      <header class="page__title case__heading">
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
      </header>
    </slot>
    <slot slot="content">
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
      <div class="case__sections">
        <CaseSection v-for="(section,i) of caseItem.data.content" :key="i" :data="section" />
      </div>
    </slot>
  </SlugItem>
</template>

<script>

import ButtonTag from '../../../components/reusable/buttons/ButtonTag'
import { pageMixin } from '../../../mixins/page-mixins'
import ButtonPrimary from '../../../components/reusable/buttons/ButtonPrimary'
import UserInfo from '../../../components/reusable/UserInfo'
import SlugItem from '../../../components/reusable/SlugItem'
import CaseSection from '../CaseSection'
export default {
  components: { CaseSection, SlugItem, UserInfo, ButtonPrimary, ButtonTag },
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
