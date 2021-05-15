<template>
  <div
    ref="tag"
    class="form__tags-item"
    :class="{'form__tags-item--selected': isSelected}"
  >
    <span
      ref="wave"
      class="form__tags-wave"
    />
    <input
      :id="`tag_${index}`"
      :value="data"
      :name="data"
      hidden
      type="checkbox"
    >

    <label
      class="form__tags-label"
      :for="`tag_${index}`"
      @click.stop="select"
    > {{ $t(`form.checkboxes.${data}`) }}
    </label>
  </div>
</template>

<script>

export default {
  name: 'FormTag',
  props: ['data', 'index'],

  data () {
    return {
      wave: null,
      isSelected: false
    }
  },

  methods: {
    select (event) {
      this.isSelected = !this.isSelected

      const wave = this.$refs.wave

      wave.style.left = event.clientX - this.$refs.tag.getBoundingClientRect().left + 'px'
      wave.style.top = event.clientY - this.$refs.tag.getBoundingClientRect().top + 'px'

     // wave.classList.toggle('form__tags-wave--active')
    }
  }
}
</script>

<style lang="scss">
.form__tags {

  &-item {
    position: relative;

    display: flex;
    overflow: hidden;

    margin: 6px 8px;

    border: 1px solid $color__light_16;
    border-radius: 32px;



    label {
      @include caption-normal;
      position: relative;
      z-index: z(content);

      display: block;

      padding: 16px 24px;

      color: $color__light;

      cursor: pointer;

      transition: color ease .4s;
    }

    &--selected {


      label {
        color: $color__font--primary;
      }

      .form__tags-wave {
        transform: scale(30);

        transition: transform ease .8s 0s;
      }
    }
  }

  &-wave {
    position: absolute;
    top:0;
    left: 0;
    z-index: z(bg-content);

    width: 15px;
    height: 15px;

    border-radius: 100%;

    background: $color__light;

    transform:  scale(0);

    transition: transform ease .4s 0s;

    /* &--active {
      transform: scale(50);
    }*/
  }
}

</style>
