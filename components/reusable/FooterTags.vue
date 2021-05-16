<template>
  <div class="footer-tags">
    <ButtonTag
      v-for="(tags,index) of socials"
      :key="index"
      :is-dark="isDark"
      class="footer-tags__tag"
      is-icon-animate
      :link="tags.link"
      :icon="tags.icon"
    >
      {{ tags.name }}
    </ButtonTag>
  </div>
</template>

<script>
import ButtonTag from './buttons/ButtonTag'
export default {
  name: 'FooterTags',
  components: { ButtonTag },
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      socials: [
        {
          name: 'Instagram',
          icon: 'instagram.png',
          link: '/'
        },
        {
          name: 'YouTube',
          icon: 'youtube.png',
          link: '/'
        },
        {
          name: 'Facebook',
          icon: 'facebook.png',
          link: '/'
        },
        {
          name: 'Behance',
          icon: 'behance.png',
          link: '/'
        },
        {
          name: 'Dribbble',
          icon: 'dribble.png',
          link: '/'
        }
      ]
    }
  }

}
</script>

<style lang="scss">
.footer-tags {
  display: flex;
  @include breakpoint ($phone__all) {
    flex-wrap: wrap;
max-width: 300px;
    &>a {
      margin-bottom: 8px;
    }
  }
}
</style>
