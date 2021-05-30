<template>
  <footer
    v-in-viewport.once
    data-scroll-section
    class="footer"
  >
    <hr class="divider">
    <!--    TOP-->
    <div class="footer__top">
      <Logo class="footer__logo animation-move-from-right" />
      <div class="footer__nav" />
      <ButtonPrimary
        class="footer__top-btn1 animation-fade"
        is-popup-toggle
        :popup-called-type="type"
      >
        {{ $t('buttons.call-estimate') }}
      </ButtonPrimary>
      <ButtonPrimary class="footer__top-btn2 animation-move-from-left" is-popup-toggle>
        {{ $t('buttons.call-form') }}
      </ButtonPrimary>
    </div>
    <hr class="divider">
    <!--    Main-->
    <div class="footer__main">
      <div class="footer__main-mail animation-move-from-right animation-delay-4">
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
      <div class="footer__main-nav animation-fade">
        <Navigation is-static />
      </div>
      <div class="footer__main-address animation-fade">
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
        class="footer__main-button animation-move-from-left animation-delay-4"
      >
        <ButtonToTop />
      </div>
    </div>
    <hr class="divider">
    <!--    BOTTOM-->
    <div class="footer__bottom">
      <p class="footer__copyright animation-move-from-right animation-delay-6">
        © boro 2021
      </p>
      <FooterTags class="animation-move-from-left animation-delay-6" />
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
import ButtonToTop from '../reusable/buttons/ButtonToTop'

export default {
  name: 'Footer',
  components: { ButtonToTop, FooterTags, ButtonTag, LinkPrimary, Navigation, ButtonPrimary, LayoutNav, Logo },
  data () {
    return {
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
  mounted () {
    setTimeout(() => {
      this.$nuxt.$emit('update-locomotive')
    }, 1000)
  }

}
</script>

<style>

</style>
