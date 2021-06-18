<template>
  <SlugItem is-case>
    <slot slot="title">
      <header class="page__title case__heading">
        <h1>
          {{ caseItem.data.title }}
        </h1>
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
        <template v-for="(section,i) of caseItem.data.content">
          <CasePresentation v-if="i===1" :key="i * 100" :data="caseItem.data.presentation" />
          <CaseSection :key="i" :data="section" />
        </template>
        <section v-in-viewport class=" case-section case__review">
          <h3 class="case-section__title">
            {{ caseItem.data.review.title }}
          </h3>
          <div class="case__review-content">
            <div class="case__review-user">
              <nuxt-img class="case__review-img" :src="caseItem.data.review.img" />
              <h5 class="case__review-name">
                {{ caseItem.data.review.name }}
              </h5>
              <p class="case__review-role">
                {{ caseItem.data.review.role }}
              </p>
            </div>
            <p class="case__review-text">
              {{ caseItem.data.review.text }}
            </p>
          </div>
          <hr class="divider">
        </section>
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
import CasePresentation from '../CasePresentation'
export default {
  components: { CasePresentation, CaseSection, SlugItem, UserInfo, ButtonPrimary, ButtonTag },
  mixins: [pageMixin],
  async asyncData (context) {
    const response = await context.app.$axios.get('/api/cases')
    const caseItem = response.data.find(e => e.link === context.route.path)
    return { caseItem }
  }
}
</script>

<style lang="scss">
@import "assets/scss/sections/case";
</style>
