<template>
  <div class="lang-dropdown">
    <button @click="$i18n.locale=lang.code"
            v-for="lang in $i18n.locales"
            :key="lang.code">{{ lang.name }}
    </button>
    <!--    <select v-model="$i18n.locale">
          <option
              v-for="lang in $i18n.locales"
              :key="lang.code"
              :value="lang.code"
          >{{ lang.name }}
          </option
          >
        </select>-->
  </div>
</template>
<script>
export default {}
</script>
