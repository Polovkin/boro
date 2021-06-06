<template>
  <span class="text-flip">
    <span
      class="text-flip-inner"
      :style="`transform: rotateY(${deg}deg);`"
    >
      <span class="text-flip-card front">{{ frontText }}</span>
      <span class="text-flip-card back">{{ backText }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'TextFlip',
  props: ['data'],
  data () {
    return {

      currentText: 0,
      deg: 0,
      counter: 0,
      frontText: '',
      backText: '',
      delay: 800,
      timeOut: null
    }
  },
  mounted () {
    this.frontText = this.data[0]
    this.backText = this.data[1]

    this.timeOut = setInterval(() => {
      if (document.hidden) { return null }
      this.start()
    }, 3000)
  },
  beforeDestroy () {
    clearTimeout(this.timeOut)
  },

  methods: {
    getTextArrPosition () {
      this.currentText = this.currentText === this.data.length - 1 ? 0 : this.currentText + 1
    },
    flipCart () {
      this.counter = this.counter + 1
      this.deg = this.counter * 180
    },

    changeCartContent (position, arr) {
      this.frontText = this.counter % 2 === 0
        ? arr[position]
        : arr[position === arr.length - 1 ? 0 : position + 1]
      this.backText = this.counter % 2 === 0
        ? arr[position === arr.length - 1 ? 0 : position + 1]
        : arr[position]
    },
    start () {
      this.flipCart()
      this.getTextArrPosition()
      setTimeout(() => {
        this.changeCartContent(this.currentText, this.data)
      }, this.delay)
    }
  }
}
</script>

<style scoped
       lang="scss">
.text-flip {
  $width: 160px;
  $height: 60px;
  position: relative;
  top: 12px;
  right: 15px;

  display: inline-block;
  width: $width;
  height: $height;

  margin-left: 1rem;

  background-color: transparent;

  perspective: 1000px;

  &-inner {
    position: relative;

    display: block;

    width: 100%;
    height: 100%;

    text-align: center;

    transform-style: preserve-3d;

    transition: transform $videinfa_function .8s;
  }

  &-card {
    position: absolute;

    display: none;
    height: 100%;

    background-color: $color__dark;

    color: $color__light;
    font-size: 54px;
    font-weight: 500;
    line-height: 60px;

    backface-visibility: hidden;

    &.front, &.back {
      display: block;
    }

    &.back {
      transform: rotateY(180deg);
    }
  }

}

</style>
