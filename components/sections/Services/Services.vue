<template>
  <Section
    class="main-services"
  >
    <h2
      slot="title"
    >
      Services
    </h2>
    <div slot="content" class="main-services__content">
      <ServiceItem v-for="(item,index) of items" :key="index" :data="item" />
    </div>
  </section>
</template>

<script>
import LinkPrimary from '../../reusable/LinkPrimary'
import Section from '../../reusable/Section'
import ServiceItem from './ServicesItem'

export default {
  name: 'Services',
  components: { ServiceItem, Section, LinkPrimary },
  data () {
    return {
      items: [
        {
          img: 'Cover.jpg',
          title: 'Web and Mobile Apps',
          description: 'Don’t rely on imagination only. We can picture your product before it comes to life.',
          button: {
            text: 'Work with us',
            link: '/'
          }
        },
        {
          img: 'Cover.jpg',
          title: 'Websites',
          description: 'For any product, graphics and motion design are now becoming a necessary part of development.',
          button: {
            text: 'Work with us',
            link: '/'
          }
        },
        {
          img: 'Cover.jpg',
          title: 'Motion & 3D',
          description: 'We can create any projects with  3D animation - instructions, infographics, pre-rolls, teasers, intros, titles, video advertisements and others.',
          button: {
            text: 'Work with us',
            link: '/'
          }
        },
        {
          img: 'Cover.jpg',
          title: 'Graphic',
          description: 'Don’t rely on imagination only. We can picture your product before it comes to life.',
          button: {
            text: 'Work with us',
            link: '/'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/main-services.scss";
</style>
