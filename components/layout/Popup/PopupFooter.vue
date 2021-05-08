<template>
  <div class="popup__footer">
    <hr class="divider">
    <div class="popup__wrap">
      <div class="popup__footer-info animation-move-from-right">
        <p class="popup__footer-item">
          <span>Write</span>
          <a href="mailto:hello@boro.com">hello@boro.com</a>
        </p>
        <p class="popup__footer-item">
          <span>Call</span>
          <a href="tel:380939312641"> +3 (8093) 93 12 641</a>
        </p>
      </div>
      <FooterTags class="animation-move-from-left" :is-dark="!isLight" />
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
  }
}
</script>

<style lang="scss">

</style>
