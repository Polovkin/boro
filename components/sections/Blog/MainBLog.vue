<template>
  <Section
    v-in-viewport
    num-elem
    class="main-blog"
  >
    <h2 slot="title">
      {{ $t('blog.title') }}
    </h2>
    <LinkPrimary
      slot="elem"
      :payload="'24'"
      link="/"
    >
      {{ $t('buttons.call-posts') }}
    </LinkPrimary>
    <div
      slot="content"
      class="main-blog__content"
    >
      <div class="main-blog__posts">
        <PostCard
          v-for="(post,index) of posts"
          :key="index"
          :post="post"
        />
      </div>

      <hr class="divider">
    </div>
  </Section>
</template>

<script>
import Section from '../../reusable/Section'
import LinkPrimary from '../../reusable/LinkPrimary'
import PostCard from './PostCard'

export default {
  name: 'MainBLog',
  components: { PostCard, LinkPrimary, Section },
  data () {
    return {
      posts: [
        {
          img: '/img/blog1.jpg',
          title: 'UX analytics of an online store',
          date: '14 April 2021',
          tags: ['UI/UX Design', 'Web design'],
          text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
          link: '/'
        },
        {
          img: '/img/blog2.jpg',
          title: 'What should be the workplace',
          date: '14 April 2021',
          tags: ['UI/UX Design', 'Web design'],
          text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
          link: '/'
        },
        {
          img: '/img/blog3.jpg',
          title: 'Developer\'s corporate website design',
          date: '14 April 2021',
          tags: ['UI/UX Design', 'Web design'],
          text: 'Want to know how such works are created? Make tea and sit down more comfortably, the next 8 minutes will not let you get bored.',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.main-blog {
  $grid_gap: 29px;

  &__content {

    .divider {
      margin-top: 32px;
    }
  }

  &__posts {
    display: grid;

    padding-top: 32px;
    grid-column-gap: $grid_gap;
    grid-template-columns: repeat(3, 1fr);
    @include breakpoint ($mobile__all) {
      flex-direction: column;

      display: flex;
    }
  }

  .blog-card {
    $width: calc(((1312 / 3) / 1400) * 100vw);
    $height: calc((294 / 400) * #{$width});

    &__img {

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    @include breakpoint ($mobile__all) {
      margin-bottom: 40px;
    }
  }
}

</style>
