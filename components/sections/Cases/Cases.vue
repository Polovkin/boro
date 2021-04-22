<template>
  <Section num-elem
           class="cases-section"
           :title="`Cases`">
    <LinkPrimary :payload="'24'"
                 slot="elem"
                 link="/">All projects
    </LinkPrimary>
    <div slot="content"
         class="cases-section__items">
      <CaseMainItem :key="index" :data="item"
                    v-for="(item,index) of cases"/>
    </div>
  </Section>
</template>

<script>
import Section from "../../reusable/Section";
import LinkPrimary from "../../reusable/LinkPrimary";
import CaseMainItem from "./CaseMainItem";

export default {
  name: "Cases",
  components: {CaseMainItem, LinkPrimary, Section},
  data() {
    return {
      cases: [
        {
          time: 2019,
          title: 'Bookotel',
          tags: ['UI/UX Design', 'UX review', 'Motion design'],
          description: 'Online reservation system for restaurants. Just go to restaurant, sit down and easy make order, with this app. ',
          buttons: [
            {
              text: 'Showreel',
              link: '/about'
            },
            {
              text: 'Open Case',
              link: '/'
            }
          ],
          img: '/img/Cover.jpg'
        },
        {
          time: 2020,
          title: 'Smane',
          tags: ['UI/UX Design', 'UX review', 'Motion design', '3D'],
          description: 'Since most of devices are controlled via smartphone and tablet apps, we wanted to take a perfect UX for this',
          buttons: [
            {
              text: 'OpenCase',
              link: '/'
            }
          ],
          img: '/img/Cover2.jpg'
        },
        {
          time: 2020,
          title: 'Oddo',
          tags: ['UI/UX Design', 'UX review', 'Motion design', '3D'],
          description: 'The Most Organized Online Catalog. It’s a website and application designed to facilitate the purchase of goods and services.',
          buttons: [
            {
              text: 'OpenCase',
              link: '/'
            }
          ],
          img: '/img/Cover3.jpg'
        },
        {
          time: 2020,
          title: 'Foxxiz',
          tags: ['UI/UX Design', 'UX review', 'Motion design'],
          description: 'Foxxiz - is a mobile technology company specializing in language learning, skills development and employee engagement solutions.',
          buttons: [
            {
              text: 'Showreel',
              link: '/about'
            },
            {
              text: 'OpenCase',
              link: '/'
            }
          ],
          img: '/img/Cover4.jpg'
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "/assets/scss/sections/cases";
</style>
