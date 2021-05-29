<template>
  <div class="footer-tags">
    <ButtonTag
      v-for="(tags,index) of socialsArr"
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
import { mapState } from 'vuex'
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

  computed: {
    ...mapState({
      socials: s => s.app.socials
    }),

    socialsArr () {
      return this.socials
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
      margin-top: 8px;
    }
  }
}
</style>
