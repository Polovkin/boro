<template>
  <PageSection v-in-viewport class="page contacts">
    <slot slot="title">
      {{ $t('contacts.title') }}
    </slot>
    <slot slot="content">
      <div class="contacts__heading">
        <div class="contacts__mail">
          <span class="footer__main-title">{{ $t('footer.mail') }}</span>
          <LinkPrimary
            is-static
            class="contacts__mail"
            is-to
            :link="`mailto:${content.email}`"
          >
            {{ content.email }}
          </LinkPrimary>
        </div>
        <div class="contacts__phone">
          <span class="footer__main-title">{{ $t('footer.call') }}</span>
          <br>
          <LinkPrimary
              is-static
              is-to
              :link="`tel:${content.phone}`"
          >
            {{ content.phone }}
          </LinkPrimary>
        </div>
        <div class="contacts__address">
          <span class="footer__main-title">{{ $t('footer.office') }}</span>
          <br>
          <LinkPrimary
              is-static
              is-to
              :link="'#'"
          >
            {{ $t('footer.address') }}
          </LinkPrimary>
          <span class="contacts__data-road">{{ $t('contacts.road') }}</span>
        </div>
        <hr class="divider">
      </div>
      <div class="contacts__content">
        <p>{{ $t('contacts.badge') }}</p>
        <Form :class="{'popup--active':ready}" is-light class="contacts__form " />
      </div>
    </slot>
  </PageSection>
</template>

<script>
import PageSection from '../components/sections/Blog/PageSection'
import { pageMixin } from '../mixins/page-mixins'
import Form from '../components/reusable/forms/Form'
import LinkPrimary from '../components/reusable/LinkPrimary'
export default {
  name: 'Contacts',
  components: { LinkPrimary, Form, PageSection },
  mixins: [pageMixin],
  data () {
    return {
      ready: false
    }
  },
  computed: {
    content () {
      return this.$store.state.app.content
    }
  },
  mounted () {
    this.ready = true
  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/contacts";
</style>
