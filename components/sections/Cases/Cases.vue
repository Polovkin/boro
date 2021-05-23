<template>
  <Section
    num-elem
    class="cases-section"
  >
    <h2 slot="title">
      {{ $t('cases.title') }}
    </h2>
    <LinkPrimary
      slot="elem"
      :payload="'24'"
      link="/"
    >
      {{ $t('buttons.call-projects') }}
    </LinkPrimary>
    <div
      slot="content"
      class="cases-section__items"
    >
      <CaseMainItem
        v-for="(item,index) of cases"
        :key="index"
        :data="item"
      />
      <hr class="divider">
    </div>
  </Section>
</template>

<script>
import Section from '../../reusable/Section'
import LinkPrimary from '../../reusable/LinkPrimary'
import CaseMainItem from './CaseMainItem'

export default {
  name: 'Cases',
  components: { CaseMainItem, LinkPrimary, Section },
  data () {
    return {
      cases: [
        {
          time: 2019,
          title: 'Bookotel',
          tags: ['UI/UX Design', 'UX review', 'Motion design'],
          description: 'Online reservation system for restaurants. Just go to restaurant, sit down and easy make order, with this app. ',
          buttons: [
            {
              text: 'buttons.show-reel',
              link: '/about'
            },
            {
              text: 'buttons.open-case',
              link: '/'
            }
          ],
          img: '~/assets/img/Cover.jpg'
        },
        {
          time: 2020,
          title: 'Smame',
          tags: ['UI/UX Design', 'UX review', 'Motion design', '3D'],
          description: 'Since most of devices are controlled via smartphone and tablet apps, we wanted to take a perfect UX for this',
          buttons: [
            {
              text: 'buttons.open-case',
              link: '/'
            }
          ],
          img: '~/assets/img/Cover2.jpg'
        },
        {
          time: 2020,
          title: 'Oddo',
          tags: ['UI/UX Design', 'UX review', 'Motion design', '3D'],
          description: 'The Most Organized Online Catalog. It’s a website and application designed to facilitate the purchase of goods and services.',
          buttons: [
            {
              text: 'buttons.open-case',
              link: '/'
            }
          ],
          img: '~/assets/img/Cover3.jpg'
        },
        {
          time: 2020,
          title: 'Foxxiz',
          tags: ['UI/UX Design', 'UX review', 'Motion design'],
          description: 'Foxxiz - is a mobile technology company specializing in language learning, skills development and employee engagement solutions.',
          buttons: [
            {
              text: 'buttons.show-reel',
              link: '/about'
            },
            {
              text: 'buttons.open-case',
              link: '/'
            }
          ],
          img: '~/assets/img/Cover4.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.cases-section {
  padding-top: 25px;

  &__items {
    padding-top: 190px;
     @include breakpoint ($phone__all) {
       padding-top: 0;
      }
  }
}

</style>
