<template>
  <div class="lang-switcher">
    <div class="lang-switcher__main">
      <button class="lang-switcher__active">
        {{ lang }}
      </button>
    </div>

    <div class="lang-switcher__dropdown">
      <button
        v-for="(lang,i) of $i18n.locales"
        v-if="$i18n.locales[i].code!==$i18n.locale"
        @click="changeLang(lang.code)"
      >
        {{ lang.name }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LangSwitcher',
  data () {
    return {
      currentLocale: 'en'
    }
  },
  computed: {
    lang () {
      return this.$i18n.locales.filter(e => (e.code === this.currentLocale))[0].name
    }
  },
  mounted () {

  },
  methods: {
    changeLang (lang) {
      this.currentLocale = lang
      this.$i18n.locale = lang
    }
  }
}
</script>
<style lang="scss">

.lang-switcher {
  $animation_fu: ease;
  $animation_time: .2s;

  $width_dropdown: 120px;
  align-items: center;

  position: relative;

  display: flex;
  width: $width_dropdown + 2;
  height: inherit;

  margin-right: 4px;

  &:hover {

    .lang-switcher__dropdown {
      transform: translateY(100%);
    }

    .lang-switcher__main {
      border-bottom: 1px solid $color__dark;
      @include breakpoint ($phone__all) {
        border:none;
      }
    }
  }

  &__main {
    @include size(100%);
    justify-content: center;

    z-index: z(content);

    display: flex;

    background-color: $color__background_primary;

    transition: all $animation_fu $animation_time;
  }

  &__dropdown {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    left: 0;
    z-index: z(bg-content);

    display: flex;

    width: $width_dropdown;
    height: 100px;

    border: 1px solid $color__dark_6;
    border-radius: 0px 0px 4px 4px;

    background-color: $color__background_primary;

    transform: translateY(0);

    transition: all $animation_fu $animation_time;

    &__active {
      flex: 1;
    }

    button {
      @include title-link;
      width: 32px;
      height: 24px;

      margin-bottom: 4px;

      transition: all .2s ease-in;

      &:hover {
        color: $color__primary;
        text-decoration: underline;
      }
    }

    @include breakpoint ($phone__all) {
      display: none;
    }
  }

  button {
    @include body-secondary;
    color: $color__font--primary;
  }
}
</style>
