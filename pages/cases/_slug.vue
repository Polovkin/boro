<template>
  <SlugItem is-case>
    <slot slot="title">
      <header
        v-in-viewport.once
        class="page__title case__heading"
      >
        <div class="animation-mask">
          <h1>
            {{ caseItem.title }}
          </h1>
        </div>
        <div class="case__button">
          <div class="animation-move-from-right">
            <ButtonPrimary>Behance</ButtonPrimary>
          </div>
        </div>

        <div class="case__tags">
          <!--          <div class="animation-move-from-left">
            <div class="case__tags-wrap">
              <ButtonTag
                v-for="(tag,index) of caseItem.tags"
                :key="index"
              >
                {{ $t(`blog.tags.${tag}`) }}
              </ButtonTag>
            </div>
          </div>-->
        </div>

        <hr class="divider">
      </header>
    </slot>
    <slot slot="content">
      <div
        v-in-viewport.once
        class="case__main"
      >
        <div class="case__main-team">
          <!--          <UserInfo
            v-for="(user,i) of caseItem.data.team"
            :key="i"
            :data="user"
          />-->
        </div>
        <div class="case__main-img">
          <img
            width="326"
            height="249"
            :src="caseItem.thumbnail"
          >
          <!--          <nuxt-picture
            width="326"
            height="249"
            :src="caseItem.thumbnail"
          />-->
        </div>
      </div>
      <div class="case__sections">
        <!--        <template v-for="(section,i) of caseItem.data.content">
          <CasePresentation
            v-if="i===1"
            :key="i * 100"
            :data="caseItem.data.presentation"
          />
          <CaseSection
            :key="i"
            :data="section"
          />
        </template>-->
        <section
          v-in-viewport.once
          class=" case-section case__review"
        >
          <!--          <div class="animation-move-from-right">
            <h3 class="case-section__title">
              {{ caseItem.data.review.title }}
            </h3>
          </div>
          <div class="case__review-content">
            <div class="case__review-user">
              <nuxt-img
                class="case__review-img"
                :src="caseItem.data.review.img"
              />
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
          </div>-->
          <hr class="divider">
        </section>
      </div>
    </slot>
  </SlugItem>
</template>

<script>

import ButtonTag from '../../components/reusable/buttons/ButtonTag'
import { pageMixin } from '../../mixins/page-mixins'
import ButtonPrimary from '../../components/reusable/buttons/ButtonPrimary'
import UserInfo from '../../components/reusable/UserInfo'
import SlugItem from '../../components/reusable/SlugItem'
import CaseSection from '../../components/sections/Cases/CaseSection'
import CasePresentation from '../../components/sections/Cases/CasePresentation'

export default {
  components: { CasePresentation, CaseSection, SlugItem, UserInfo, ButtonPrimary, ButtonTag },
  mixins: [pageMixin],
  async asyncData ({ params, $axios, app }) {
    const oneCase = await $axios.$get(`${app.$config.URL_SERVER}/case/link/${params.slug}`)
    return { oneCase }
  },
  computed: {
    caseItem () {
      // return this.$store.state.app.cases.find(e => e.link === this.$route.path)
      return this.oneCase
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/sections/case";
</style>
