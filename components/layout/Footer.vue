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
      <LayoutNav class="footer__nav" />
      <div class="footer__buttons">
        <ButtonPrimary>Estimate project</ButtonPrimary>
        <ButtonPrimary>Get In Touch</ButtonPrimary>
      </div>
    </div>
    <hr class="divider">
    <!--    Main-->
    <div class="footer__main">
      <div class="footer__main-mail">
        <span class="footer__main-title">Write</span>
        <LinkPrimary class="footer__main-link" is-to :link="`mailto:${mail}`">
          {{ mail }}
        </LinkPrimary>

        <ul class="footer__main-list">
          <li
            v-for="(items,index) of terms"
            :key="index"
          >
            <LinkPrimary :link="items.link">
              {{ items.name }}
            </LinkPrimary>
          </li>
        </ul>
      </div>
      <div class="footer__main-nav">
        <Navigation />
      </div>
      <div class="footer__main-address">
        <ul>
          <li>
            <span class="footer__main-title">Office</span>
            <br>
            <span class="link__wrap">  Kyivska Street, 14, Vinnytsia, , 21000</span>
          </li>
          <li>
            <span class="footer__main-title">Call</span>
            <br>
            <LinkPrimary is-to :link="`tel:${tel}`">
              {{ tel }}
            </LinkPrimary>
          </li>
        </ul>
      </div>
      <div class="footer__main-button" @click="toTop">
        <button>Go Top <span /></button>
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
import FooterTags from "../reusable/FooterTags";

export default {
  name: 'Footer',
  components: {FooterTags, ButtonTag, LinkPrimary, Navigation, ButtonPrimary, LayoutNav, Logo },
  data () {
    return {
      mail: 'hello@boro.com',
      tel: '+3 (8093) 93 12 641',

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
