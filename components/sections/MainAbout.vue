<template>
  <Section
    num-elem
    class="main-about"
  >
    <h2
      slot="title"
      class="main-about__title"
    >
      {{ $t('about.title') }}
    </h2>
    <LinkPrimary
      slot="elem"
      link="/"
    >
      {{ $t('buttons.call-about') }}
    </LinkPrimary>
    <div
      slot="content"
      class="main-about__content"
    >
      <div
        v-in-viewport.once
        :style="`height: ${height}px`"
        class="main-about__images"
      >
        <figure class="main-about__img animation-image-viewport">
          <nuxt-picture
            alt="Elena"
            fit="cover"
            width="430"
            height="368"
            src="/img/about1.jpg"
          />
        </figure>
        <figure class="main-about__img  animation-image-viewport">
          <nuxt-picture
            alt="Khabib"
            fit="cover"
            width="430"
            height="724"
            src="/img/about2.jpg"
          />
        </figure>
        <figure class="main-about__img  animation-image-viewport">
          <nuxt-picture
            alt="Yeghor"
            fit="cover"
            width="430"
            height="458"
            src="/img/about3.jpg"
          />
        </figure>
      </div>
      <hooper class="main-about__slider" :settings="hooperSettings">
        <slide>
          <figure class="main-about__img">
            <nuxt-img
              alt="Elena"
              fit="cover"
              loading="lazy"
              width="430"
              height="368"
              src="/img/about1.jpg"
            />
          </figure>
        </slide>
        <slide>
          <figure class="main-about__img">
            <nuxt-img
              alt="Khabib"
              fit="cover"
              loading="lazy"
              width="430"
              height="724"
              src="/img/about2.jpg"
            />
          </figure>
        </slide>
        <slide>
          <figure class="main-about__img">
            <nuxt-img
              alt="Yeghor"
              fit="cover"
              loading="lazy"
              width="430"
              height="458"
              src="/img/about3.jpg"
            />
          </figure>
        </slide>
        <hooper-pagination slot="hooper-addons" />
      </hooper>
      <hr class="divider">
      <hr class="divider divider-mobile">
      <dl v-in-viewport.once class="main-about__grid">
        <div
          v-for="(item,index) of numbersData"
          :key="index"
          class="main-about__grid-item animation-fade"
        >
          <dt>{{ item.number }}</dt>
          <dl>{{ $t(item.text) }}</dl>
        </div>
      </dl>
    </div>
  </Section>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper'
import Section from '../reusable/Section'
import LinkPrimary from '../reusable/LinkPrimary'
export default {
  name: 'MainAbout',
  components: {
    LinkPrimary,
    Section,
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation
  },

  data () {
    return {
      height: 1000,
      numbersData: [
        {
          number: '7+',
          text: 'about.years'
        },
        {
          number: '50',
          text: 'about.cases'
        },
        {
          number: '14',
          text: 'about.specialists'
        }
      ],
      width: 0,
      hooperSettings: {
        itemsToShow: 1.175,
        wheelControl: false,
        pagination: true
      }
    }
  },
  computed: {
    /* heightChange() {
      return (724 / 430) * (this.width / 3)
    } */
  },
  mounted () {
    this.heightChange()
    window.addEventListener('resize', () => {
      this.heightChange()
    })
    this.$nextTick(function () {
      this.$nuxt.$emit('update-locomotive')
    })
  },
  methods: {
    heightChange () {
      this.height = Math.ceil((724 / 430) * (window.innerWidth / 3))
      this.$nuxt.$emit('update-locomotive')
    }
  }
}
</script>

<style lang="scss">

@import "/assets/scss/sections/main-about.scss";
</style>
