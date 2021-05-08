<template>
  <div
    class="main-section"
    :class="{'animation-trigger-start': isPreloaderDone}"
  >
    <div class="main-section__wrap">
      <div
        class="main-section__title"
      >
        <h1>
          {{ $t('main.title') }}
          <TextFlip :data="text" />
        </h1>
      </div>
      <Navigation
        class="main-section__navigation"
      />
    </div>
    <div class="main-section__footer">
      <hr class="divider">
      <div class="main-section__tags">
        <p class="body-tertiary text-color-tertiary">
          {{ $t('main.description') }}
        </p>
        <div class="main-section__tags-wrap">
          <ButtonTag
            v-for="(tags,index) of socials"
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
import TextFlip from '../reusable/TextFlip'
import ButtonTag from '../reusable/buttons/ButtonTag'

export default {
  name: 'MainSection',
  components: { ButtonTag, TextFlip, Navigation },
  data () {
    return {
      text: ['UI/UX', 'GL/HF', 'SS/WP'],
      socials: [
        {
          name: 'Instagram',
          icon: 'instagram.png',
          link: '/'
        },
        {
          name: 'youtube',
          icon: 'youtube.png',
          link: '/'
        },
        {
          name: 'facebook',
          icon: 'facebook.png',
          link: '/'
        },
        {
          name: 'behance',
          icon: 'behance.png',
          link: '/'
        },
        {
          name: 'Dribble',
          icon: 'dribble.png',
          link: '/'
        }
      ]

    }
  },
  computed: {
    ...mapState({
      preloaderDone: s => s.app.preloaderDone
    }),
    isPreloaderDone () {
      return this.preloaderDone
    }
  }
}
</script>

<style lang="scss">

@import "/assets/scss/sections/main-sections";

</style>
