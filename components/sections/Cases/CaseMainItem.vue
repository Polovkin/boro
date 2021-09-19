<template>
  <div v-in-viewport.once class="case-item">
    <hr class="divider">
    <div class="case-item__wrap">
      <time
        class="case-item__time"
        :datetime="data.date"
      >
        {{ data.date | dateYear }}
      </time>
      <div class="case-item__content">
        <h4>{{ data.title }}</h4>

        <div class="case-item__content-tags">
          <!--          <ButtonTag v-for="(tag,index) of data.tags" :key="index">
            {{ $t(`blog.tags.${tag}`) }}
          </ButtonTag>-->
        </div>
        <p class="case-item__description">
          {{ data.description }}
        </p>
        <div class="case-item__content-buttons animation-fade animation-delay-5">
          <ButtonPrimary
            :link="`cases/${data.link}`"
          >
            {{ $t('buttons.open-case') }}
          </ButtonPrimary>
        </div>
      </div>

      <figure class="case-item__img animation-image-viewport animation-delay-4">
        <img
          width="326"
          height="249"
          :src="data.thumbnail"
        >
        <!--        <nuxt-picture
          width="326"
          height="249"
          :src="data.thumbnail"
        />-->
      </figure>
    </div>
  </div>
</template>

<script>
import ButtonTag from '../../reusable/buttons/ButtonTag'
import ButtonPrimary from '../../reusable/buttons/ButtonPrimary'

export default {
  name: 'CaseMainItem',
  components: { ButtonPrimary, ButtonTag },
  filters: {
    capitalize (value) {
      if (!value) { return '' }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  props: ['data'],
  mounted () {
    console.log(this.data)
  }
}
</script>

<style lang="scss">
@import "/assets/scss/components/case-item";
</style>
