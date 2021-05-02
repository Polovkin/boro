<template>
  <section
    v-in-viewport
    class="lead-section section"
    data-scroll-section
  >
    <hr class="divider">
    <div class="lead-section__content">
      <h2 class="lead-section__header">
        Ready to Discuss a Project?<br>
        Prepare for a quick response <br>
        <span class="text-color-main">hello@boro.com</span>
      </h2>
      <div class="lead-section__contact">
        <UserInfo :data="data" :tags="socials" />
        <!--        <div class="lead-section__contact-info">
          <figure class="lead-section__img">
            <nuxt-img
              loading="lazy"
              src="/img/stos.jpg"
              alt="stos"
            />
          </figure>
          <p class="lead-section__text">
            CBDO
          </p>
          <p class="lead-section__name">
            Stas Stashkevych
          </p>
        </div>
        <div class="lead-section__contact-tags">
          <ButtonTag
            v-for="(tags,index) of socials"
            :key="index"
            class="lead-section__contact-tag"
            :link="tags.link"
            :icon="tags.icon"
          >
            {{ tags.name }}
          </ButtonTag>
        </div>-->
      </div>
    </div>
    <hr class="divider">
  </section>
</template>

<script>
import ButtonTag from '../reusable/buttons/ButtonTag'
import UserInfo from '../reusable/UserInfo'
export default {
  name: 'Lead',
  components: { UserInfo, ButtonTag },
  data () {
    return {
      data: {
        name: 'Stas Stashkevych',
        position: 'CBDO',
        img: 'stos.jpg'
      },
      socials: [
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

@import '/assets/scss/sections/lead-section';
</style>
