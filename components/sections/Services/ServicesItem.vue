<template>
  <div
    v-in-viewport.once
    :class="{'test':test}"
    class="service-item"
  >
    <hr class="divider">
    <div class="service-item__wrap">
      <figure class="service-item__img animation-image-viewport animation-delay-4">
        <nuxt-picture
          loading="lazy"
          width="326"
          height="248"
          :src="`/img/${data.img}`"
        />
      </figure>
      <div class="service-item__num">
        {{ index + 1 }}
      </div>
      <div class="service-item__content">
        <h4>{{ data.title }}</h4>
        <p class="service-item__description">
          {{ data.description }}
        </p>
        <ButtonPrimary
          :link="data.button.link"
        >
          {{ $t(data.button.text) }}
        </ButtonPrimary>
      </div>

      <div class="service-item__content-buttons animation-fade animation-delay-5">
        <button
          class="service-item__btn-open"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '../../reusable/buttons/ButtonPrimary'

export default {
  name: 'ServiceItem',
  components: { ButtonPrimary },
  props: ['data', 'index'],
  data () {
    return {
      test: false
    }
  },
  updated () {
    this.$nuxt.$emit('update-locomotive')
  },
  methods: {
    polova () {
      this.test = !this.test
    }
  }
}
</script>

<style lang="scss">
@import "/assets/scss/components/service-item";
</style>
