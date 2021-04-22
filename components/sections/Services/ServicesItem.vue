<template>
  <div class="service-item">
    <hr class="divider">
    <div class="service-item__wrap">
      <figure class="service-item__img">
        <nuxt-picture
          width="326"
          height="248"
          fit="cover"
          loading="lazy"
          :src="`/img/${data.img}`"
        />
      </figure>
      <div class="service-item__content">
        <h4>{{ data.title }}</h4>

        <p class="service-item__description">
          {{ data.description }}
        </p>
        <ButtonPrimary
          :link="data.button.link"
        >
          {{ data.button.text }}
        </ButtonPrimary>
      </div>

      <div class="service-item__content-buttons">
        <button class="service-item__btn-open"/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '../../reusable/ButtonPrimary'

export default {
  name: 'ServiceItem',
  components: { ButtonPrimary },
  props: ['data']
}
</script>

<style lang="scss">
@import "/assets/scss/components/service-item";
</style>
