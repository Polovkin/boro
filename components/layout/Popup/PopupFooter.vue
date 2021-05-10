<template>
  <div class="popup__footer">
    <hr class="divider">
    <div class="popup__wrap">
      <div class="popup__footer-info animation-move-from-right">
        <p class="popup__footer-item">
          <span>{{ $t('footer.mail') }}</span>
          <a :href="`mailto:${content.email}`">{{ content.email }}</a>
        </p>
        <p class="popup__footer-item">
          <span>{{ $t('footer.call') }}</span>
          <a :href="`tel:${content.phone}`">{{ content.phone }}</a>
        </p>
      </div>
      <FooterTags class="animation-move-from-left " :is-dark="!isLight" />
    </div>
  </div>
</template>

<script>

import FooterTags from '../../reusable/FooterTags'
export default {
  name: 'PopupFooter',
  components: { FooterTags },
  props: {
    isLight: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tags: [
        {
          name: 'Viber',
          icon: 'facebook.png',
          link: '/'
        },
        {
          name: 'WhatsApp',
          icon: 'facebook.png',
          link: '/'
        },
        {
          name: 'Telegram',
          icon: 'facebook.png',
          link: '/'
        }
      ]
    }
  },
  computed: {
    content () {
      return this.$store.state.app.content
    }
  }
}
</script>

<style lang="scss">

</style>
