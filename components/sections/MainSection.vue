<template>
  <div

    class="main-section"
    :class="{'animation-trigger-start': mainPageState}"
  >
    <div class="container">
      <div class="main-section__slider animation-fade">
        <div
          v-for="(slide,index) of slides"
          :key="index"
          class="main-section__slide"
          :class="{'main-section__slide--active':index===activeSlide}"
        >
          <img
            loading="lazy"
            :src="slide.url"
            :alt="slide.name"
          >
        </div>
      </div>
      <div class="main-section__wrap">
        <div
          class="main-section__title "
        >
          <h1>
            <span class="animation-mask">
              <span>
                {{ $t('main.title1') }}
              </span>
            </span>
            <span class="main-section__circle animation-fade" /><br>
            <span class="animation-mask">
              <span>
                {{ $t('main.title2') }}
              </span>

            </span>
            <span class="main-section__smile animation-fade" />
          </h1>
        </div>
        <Navigation
          class="main-section__navigation animation-mask"
        />
      </div>
      <div class="main-section__footer">
        <hr
          class="divider light"
          :class="{'divider-anim' :mainPageState && preloaderDone}"
        >
        <div class="main-section__tags">
          <p class="body-tertiary animation-move-from-right ">
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
      text: ['UI/UX', 'GL/HF', 'SS/WP'],
      activeSlide: 0,
      slides: [
        {
          url: '/img/main/1.jpg',
          name: 'Sashko '
        },
        {
          url: '/img/main/2.jpg',
          name: 'Zradnuk'
        },
        {
          url: '/img/main/3.jpg',
          name: 'Yehor'
        },
        {
          url: '/img/main/4.jpg',
          name: 'Lyub'
        },
        {
          url: '/img/main/5.jpg',
          name: 'Khom'
        }

      ]
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
  },

  mounted () {
    setInterval(() => {
      this.activeSlide = this.activeSlide === 4 ? 0 : this.activeSlide + 1
    }, 5000)
  }

}
</script>

<style lang="scss">

@import "/assets/scss/sections/main-sections";

</style>
