<template>
  <div
    id="top"
    class="main-section"
    :class="{'animation-trigger-start': mainPageState}"
  >
    <div class="main-section__wrap">
      <div
        class="main-section__title  animation-mask"
      >
        <h1>
          {{ $t('main.title') }}
        </h1>
      </div>
      <Navigation
        class="main-section__navigation animation-mask"
      />
    </div>
    <div class="main-section__footer">
      <hr class="divider">
      <div class="main-section__tags">
        <p class="body-tertiary text-color-tertiary animation-move-from-right animation-delay-4">
          {{ $t('main.description') }}
        </p>
        <div class="main-section__tags-wrap animation-move-from-left animation-delay-4">
          <ButtonTag
            v-for="(tags,index) of socialsArr"
            :key="index"
            is-icon-animate
            :link="tags.link"
            :icon="tags.icon"
          >
            {{ tags.name }}
          </ButtonTag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from '../reusable/Navigation'
import ButtonTag from '../reusable/buttons/ButtonTag'

export default {
  name: 'MainSection',
  components: { ButtonTag, Navigation },
  data () {
    return {
      text: ['UI/UX', 'GL/HF', 'SS/WP']
    }
  },

  computed: {
    ...mapState({
      preloaderDone: s => s.app.preloaderDone,
      socials: s => s.app.socials,
      mainPage: s => s.app.mainPageState
    }),

    socialsArr () {
      return this.socials
    },

    mainPageState () {
      return this.mainPage
    }
  }
}
</script>

<style lang="scss">

@import "/assets/scss/sections/main-sections";

</style>
