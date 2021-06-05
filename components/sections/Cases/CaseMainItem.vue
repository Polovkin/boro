<template>
  <div v-in-viewport.once class="case-item">
    <hr class="divider">
    <div class="case-item__wrap">
      <time
        class="case-item__time"
        :datetime="data.date"
      >{{ data.date }}
      </time>
      <div class="case-item__content">
        <h4>{{ data.data.title }}</h4>

        <div class="case-item__content-tags">
          <ButtonTag v-for="(tag,index) of data.tags" :key="index">
            {{ $t(`blog.tags.${tag}`) }}
          </ButtonTag>
        </div>
        <p class="case-item__description">
          {{ data.data.description }}
        </p>
        <div class="case-item__content-buttons animation-fade animation-delay-5">
          <ButtonPrimary
            :link="data.link"
          >
            {{ $t('buttons.open-case') }}
          </ButtonPrimary>
        </div>
      </div>

      <figure class="case-item__img animation-image-viewport animation-delay-4">
        <nuxt-picture
          width="326"
          height="249"
          :src="data.data.img"
        />
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
  props: ['data']
}
</script>

<style lang="scss">
@import "/assets/scss/components/case-item";
</style>
