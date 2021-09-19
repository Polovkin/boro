<template>
  <section
    v-in-viewport.once
    class="case-section case-presentation"
  >
    <h3
      class="case-section__title"
      v-html="data.heading"
    />
    <p
      class="case-section__description"
      v-html="data.description"
    />
    <div class="case-presentation__content">
      <div class="case-presentation__authors">
        <div>
          <p class="body-secondary">
            {{ $t('cases.case.mainTypeface') }}
          </p>
          <p class="body-tertiary text-color-tertiary">
            {{ data.font.typeface }}
          </p>
        </div>
        <div>
          <p class="body-secondary">
            {{ $t('cases.case.designer') }}
          </p>
          <p class="body-tertiary text-color-tertiary">
            {{ data.font.designer }}
          </p>
        </div>
      </div>
      <div>
        <h2 class="case-presentation__font">
          {{ data.font.name }}
        </h2>
        <p class="case-presentation__letters">
          <span v-for="item of letters.split('')">{{ item }}</span>
        </p>
      </div>
      <div class="case-presentation__authors">
        <div>
          <p class="body-secondary">
            {{ $t('cases.case.mainTypeface') }}
          </p>
          <p class="body-tertiary text-color-tertiary">
            {{ data.font.typeface }}
          </p>
        </div>
        <div>
          <p class="body-secondary">
            {{ $t('cases.case.designer') }}
          </p>
          <p class="body-tertiary text-color-tertiary">
            {{ data.font.designer }}
          </p>
        </div>
      </div>

      <div class="case-presentation__colors">
        <h3>{{ $t('cases.case.poppins') }}</h3>
        <div class="case-presentation__wrap">
          <div
            v-for="(color,i) of data.content.colors"
            :key="i"
            class="case-presentation__item"
          >
            <p>#{{ color }}</p>
            <div
              :style="`background-color: ${color};`"
              class="case-presentation__circle"
            />
          </div>
        </div>
      </div>
    </div>
    <hr class="divider">
  </section>
</template>

<script>
export default {
  name: 'CasePresentation',
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      letters: ' ZYXWVUTSRQPONMLKJIHGFEDCBA'
    }
  },
  mounted () {
    console.log(this.data)
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/components/case-presentation';

.case-presentation {
  grid: {
    template: {
      columns: repeat(2, 1fr);
      rows: auto;
      areas: 'title description' '. content';
    };
  };

  &__content {
    grid-column-start: 2;

    flex-direction: column;

    display: flex;
  }

  &__authors {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-top: 24px;
    margin-bottom: 90px;
  }

  &__font {
    margin-bottom: 20px;

    font-size: 150px;
    font-weight: 400;
    line-height: 200px;
  }

  &__letters {
    justify-content: space-between;

    display: flex;

    span {
      font-size: 10.0638px;
      font-style: normal;
      font-weight: 300;
      line-height: 15px;
      text-align: left;
    }

  }

  &__wrap {
    position: relative;
    margin-top: 64px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    grid-gap: 24px;
  }

  &__item {

    position: relative;

    width: 205px;
    height: 205px;

    padding: 20px;

    border-radius: 4px;

    background-color: $color__gray_light;

    text-align: right;
  }

  &__circle {
    @include size(62px);
    position: absolute;
    top: 50%;
    left: 50%;

    border-radius: 50%;

    transform: translate(-50%, -50%);
  }
}
</style>
