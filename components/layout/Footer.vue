<template>
  <footer
    v-in-viewport
    data-scroll-section
    class="footer"
  >
    <hr class="divider">
    <!--    TOP-->
    <div class="footer__top">
      <Logo class="footer__logo" />
      <div class="footer__nav" />
      <!--      <LayoutNav class="footer__nav" />-->
      <div class="footer__buttons">
        <ButtonPrimary
          is-popup-toggle
          :popup-called-type="type"
        >
          {{ $t('buttons.call-estimate') }}
        </ButtonPrimary>
        <ButtonPrimary is-popup-toggle>
          {{ $t('buttons.call-form') }}
        </ButtonPrimary>
      </div>
    </div>
    <hr class="divider">
    <!--    Main-->
    <div class="footer__main">
      <div class="footer__main-mail">
        <span class="footer__main-title">{{ $t('footer.mail') }}</span>
        <LinkPrimary
          is-static
          class="footer__main-link"
          is-to
          :link="`mailto:${content.email}`"
        >
          {{ content.email }}
        </LinkPrimary>

        <ul class="footer__main-list">
          <li
            v-for="(items,index) of terms"
            :key="index"
          >
            <LinkPrimary
              is-static
              :link="items.link"
            >
              {{ items.name }}
            </LinkPrimary>
          </li>
        </ul>
      </div>
      <div class="footer__main-nav">
        <Navigation is-static />
      </div>
      <div class="footer__main-address">
        <ul>
          <li>
            <span class="footer__main-title">{{ $t('footer.office') }}</span>
            <br>
            <LinkPrimary
              is-static
              is-to
              :link="'#'"
            >
              {{ $t('footer.address') }}
            </LinkPrimary>
          </li>
          <li>
            <span class="footer__main-title">{{ $t('footer.call') }}</span>
            <br>
            <LinkPrimary
              is-static
              is-to
              :link="`tel:${content.phone}`"
            >
              {{ content.phone }}
            </LinkPrimary>
          </li>
        </ul>
      </div>
      <div
        class="footer__main-button"
        @click="toTop"
      >
        <button>{{ $t('buttons.to-top') }}<span /></button>
      </div>
    </div>
    <hr class="divider">
    <!--    BOTTOM-->
    <div class="footer__bottom">
      <p class="footer__copyright">
        © boro 2021
      </p>
      <FooterTags />
    </div>
  </footer>
</template>

<script>
import Logo from '../reusable/Logo'
import LayoutNav from '../reusable/LayoutNav'
import ButtonPrimary from '../reusable/buttons/ButtonPrimary'
import Navigation from '../reusable/Navigation'
import LinkPrimary from '../reusable/LinkPrimary'
import ButtonTag from '../reusable/buttons/ButtonTag'
import FooterTags from '../reusable/FooterTags'
import { POPUP_ESTIMATE } from '../../store/types'

export default {
  name: 'Footer',
  components: { FooterTags, ButtonTag, LinkPrimary, Navigation, ButtonPrimary, LayoutNav, Logo },
  data () {
    return {
      mail: 'hello@boro.com',
      tel: '+3 (8093) 93 12 641',
      type: POPUP_ESTIMATE,
      terms: [
        {
          name: 'Privacy policy',
          link: '/'
        },
        {
          name: 'Terms&Conditions',
          link: '/'
        }
      ]
    }
  },
  computed: {
    content () {
      return this.$store.state.app.content
    }
  },
  methods: {
    toTop () {
      const data = {
        target: '.main-section',
        options: ''
      }
      this.$nuxt.$emit('scroll-locomotive', data)
    }
  }
}
</script>

<style>

</style>
