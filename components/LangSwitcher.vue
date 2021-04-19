<template>
  <div class="lang-switcher">
    <div class="lang-switcher__main">
      <button class="lang-switcher__active">
        {{ lang }}
      </button>
    </div>


    <div class="lang-switcher__dropdown">
      <button @click="changeLang(lang.code)"
              v-if="$i18n.locales[i].code!==$i18n.locale"
              v-for="(lang,i) of $i18n.locales">
        {{ lang.name }}
      </button>
    </div>

  </div>
</template>
<script>
export default {
  name: "LangSwitcher",
  data() {
    return {
      currentLocale: 'en',
    }
  },
  computed: {
    lang() {
      return this.$i18n.locales.filter((e) => (e.code === this.currentLocale))[0].name
    }
  },
  methods: {
    changeLang(lang) {
      this.currentLocale = lang
      this.$i18n.locale = lang
    }
  },
  mounted() {

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

  margin-right: 15px;

  &:hover {

    .lang-switcher__dropdown {
      transform: translateY(100%);
    }

    .lang-switcher__main {
      border-bottom: 1px solid $color__dark;
    }
  }

  &__main {
    @include size(100%);
    justify-content: center;

    z-index: z(content);

    display: flex;
    transition: all $animation_fu $animation_time;
    border: 1px solid $color__light;
    border-bottom: 1px solid $color__dark_6;

    background-color: $color__light;
  }

  &__dropdown {
    transition: all $animation_fu $animation_time;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
    bottom: 0;
    z-index: z(bg-content);

    display: flex;

    width: $width_dropdown;
    height: 100px;

    border: 1px solid $color__dark_6;
    border-radius: 0px 0px 4px 4px;

    transform: translateY(0);

    &__active {
      flex: 1;
    }

    button {
      @include title-link;
      width: 32px;
      height: 24px;

      margin-bottom: 4px;
    }
  }

  button {
    @include body-secondary;
  }
}
</style>
