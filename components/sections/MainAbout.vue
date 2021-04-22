<template>
  <Section
    num-elem
    class="main-about"
  >
    <h2
      slot="title"
      class="main-about__title"
    >
      We work in close collaboration with the customer's business to create the most successful product
    </h2>
    <LinkPrimary
      slot="elem"
      link="/"
    >
      About us
    </LinkPrimary>
    <div
      slot="content"
      class="main-about__content"
    >
      <div class="main-about__images">
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
      </div>
      <hr class="divider">
      <dl class="main-about__grid">
        <div v-for="(item,index) of numbersData" :key="index" class="main-about__grid-item">
          <dt>{{ item.number }}</dt>
          <dl>{{ item.text }}</dl>
        </div>
      </dl>
    </div>
  </Section>
</template>

<script>
import Section from '../reusable/Section'
import LinkPrimary from '../reusable/LinkPrimary'

export default {
  name: 'MainAbout',
  components: { LinkPrimary, Section },

  data () {
    return {
      numbersData: [
        {
          number: '7+',
          text: 'years experience'
        },
        {
          number: '50',
          text: 'Successful cases'
        },
        {
          number: '14',
          text: 'Focused specialists'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/core/headings";
@import "/assets/scss/sections/main-about.scss";
</style>
