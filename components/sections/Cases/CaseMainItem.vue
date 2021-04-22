<template>
  <div class="case-item">
    <hr class="divider">
    <div class="case-item__wrap">
      <time class="case-item__time"
            :datetime="data.time">{{ data.time }}
      </time>
      <div class="case-item__content">
        <h4>{{ data.title }}</h4>

        <div class="case-item__content-tags">
          <ButtonTag :key="index" v-for="(tag,index) of data.tags">{{ tag }}
          </ButtonTag>
        </div>
        <p class="case-item__description">{{ data.description }}</p>
        <div class="case-item__content-buttons">
          <ButtonPrimary :key="index" :link="buttons.link"
                         v-for="(buttons,index) of data.buttons">{{ buttons.text }}
          </ButtonPrimary>
        </div>
      </div>

      <figure class="case-item__img">
        <nuxt-picture width="326"
                      height="248"
                      fit="cover"
                      loading="lazy"
                      :src="data.img"/>
      </figure>


    </div>
  </div>
</template>

<script>
import ButtonTag from "../../reusable/ButtonTag";
import ButtonPrimary from "../../reusable/ButtonPrimary";

export default {
  name: "CaseMainItem",
  components: {ButtonPrimary, ButtonTag},
  props: ['data']
}
</script>

<style lang="scss">
@import "/assets/scss/components/case-item";
</style>
