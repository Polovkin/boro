<template>
  <Section
    v-in-viewport.once
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
        class="main-about__images"
      >
        <figure class="main-about__img animation-image-viewport">
          <img
            loading="lazy"
            alt="Elena"
            width="1290"
            height="1104"
            src="/img/about1.jpg"
          >
        </figure>
        <figure class="main-about__img  animation-image-viewport">
          <img
            loading="lazy"
            alt="Khabib"
            width="1548"
            height="2325"
            src="/img/about2.jpg"
          >
        </figure>
        <figure class="main-about__img  animation-image-viewport">
          <img
            loading="lazy"
            alt="Yeghor"
            width="1290"
            height="1374"
            src="/img/about3.jpg"
          >
        </figure>
      </div>
      <hooper
        class="main-about__slider"
        :settings="hooperSettings"
      >
        <slide>
          <figure class="main-about__img animation-image-viewport">
            <img
              alt="Elena"
              loading="lazy"
              width="1290"
              height="1104"
              src="/img/about1.jpg"
            >
          </figure>
        </slide>
        <slide>
          <figure class="main-about__img animation-image-viewport">
            <img
              alt="Khabib"
              loading="lazy"
              width="1548"
              height="2325"
              src="/img/about2.jpg"
            >
          </figure>
        </slide>
        <slide>
          <figure class="main-about__img animation-image-viewport">
            <img
              alt="Yeghor"
              loading="lazy"
              width="1290"
              height="1374"
              src="/img/about3.jpg"
            >
          </figure>
        </slide>
        <hooper-pagination slot="hooper-addons" />
      </hooper>
      <hr class="divider">
      <hr class="divider divider-mobile">
      <dl
        v-in-viewport.once
        v-observe-visibility="visibilityChanged"
        class="main-about__grid"
      >
        <div
          v-for="(item,index) of numbersData"
          :key="index"
          class="main-about__grid-item animation-fade"
        >
          <!--          <dt>{{ item.number }}</dt>-->
          <dt>
            <AnimatedNumber :number="test[index].number" />
          </dt>
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
  Pagination as HooperPagination
} from 'hooper'
import Section from '../reusable/Section'
import LinkPrimary from '../reusable/LinkPrimary'
import AnimatedNumber from '../reusable/AnimatedNumber'

export default {
  name: 'MainAbout',
  components: {
    AnimatedNumber,
    LinkPrimary,
    Section,
    Hooper,
    Slide,
    HooperPagination
  },

  data () {
    return {
      numbersData: [
        {
          number: 7,
          text: 'about.years'
        },
        {
          number: 50,
          text: 'about.cases'
        },
        {
          number: 14,
          text: 'about.specialists'
        }
      ],
      test: [{ number: 0 }, { number: 0 }, { number: 0 }],
      hooperSettings: {
        itemsToShow: 1.175,
        wheelControl: false,
        pagination: true
      }
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      if (isVisible) {
        setTimeout(() => {
          this.test = this.numbersData
        }, 1000)
      }
    }

  }
}
</script>

<style lang="scss">

@import "/assets/scss/sections/main-about.scss";
</style>
