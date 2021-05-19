<template>
  <div class="page blog">
    <section data-scroll-section>
      <div class="container">
        <h2>
          {{ $t('blog.title') }}
        </h2>
        <BlogFilter />
      </div>
    </section>
  </div>
</template>

<script>
import BlogFilter from '../components/sections/Blog/BlogFilter'
export default {
  name: 'Blog',
  components: { BlogFilter },
  mounted () {
    this.$store.commit('app/SET_PRELOADER_STATE', true)
    this.$nextTick(function () {
      this.$nuxt.$emit('update-locomotive')
    })
    const data = {
      target: '.blog',
      options: ''
    }
    this.$nuxt.$emit('scroll-locomotive', data)
  }
}
</script>

<style lang="scss">
@import "/assets/scss/sections/blog.scss";
</style>
