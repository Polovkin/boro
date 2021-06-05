<template>
  <section
    v-in-viewport.once
    class="lead-section section"
    data-scroll-section
  >
    <hr class="divider">
    <div class="lead-section__content">
      <h2 class="lead-section__header animation-move-from-right">
        {{ $t('lead.title1') }} <br>
        {{ $t('lead.title2') }} <br>
        <span class="text-color-main">{{ content.email }}</span>
      </h2>
      <div class="lead-section__contact">
        <UserInfo
          class="animation-move-from-left"
          :data="user.data"
          :tags="user.socials"
        />
      </div>
    </div>
    <hr class="divider">
  </section>
</template>

<script>
import UserInfo from '../reusable/UserInfo'

export default {
  name: 'Lead',
  components: { UserInfo },
  data () {
    return {

    }
  },
  computed: {
    user () {
      return this.$store.state.app.user
    },
    content () {
      return this.$store.state.app.content
    }
  }
}
</script>

<style lang="scss">

@import '/assets/scss/sections/lead-section';
</style>
