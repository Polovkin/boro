<template>
  <div class="form">
    <div class="form__heading">
      <h2 class="form__title">
        Estimate project
      </h2>
      <p class="form__description"> Fill out the form or send an email</p>
    </div>

    <form class="form__body">
      <InputCustom
        v-model="formData.name"
        type-name
        :touch="touch"
        :input-name="'name'"
        :placeholder="'Your name'"
      />
      <InputCustom
        v-model="formData.name"
        type-email
        :touch="touch"
        :input-name="'email'"
        :placeholder="'Email'"
      />
      <InputCustom
        v-model="formData.phone"
        :touch="touch"
        :input-name="'phone'"
        :placeholder="'Phone number'"
      />
      <InputCustom
        v-model="formData.message"
        :touch="touch"
        :input-name="'message'"
        :placeholder="'Message'"
      />
    </form>
    <div class="form__tags" />
  </div>
</template>

<script>
import InputCustom from './InputAnimate'

export default {
  name: 'Form',
  components: { InputCustom },
  data () {
    return {
      touch: false,
      formData: {
        name: null,
        email: null,
        phone: null
      }
    }
  },
  mounted () {
    window.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.sendForm()
      }
    })
  },
  methods: {
    removeFile () {
      this.file = null
      this.fileError = false
    },
    handleFileUpload () {
      const file = this.$refs.file.files[0]
      if (file.size < 5242880) {
        this.fileError = false
        this.file = file
      } else {
        this.fileError = true
        this.file = null
      }
    },
    async sendForm () {
      this.touch = true
      let valid = true

      for (const data in this.formData) {
        if (!this.formData[data]) {
          valid = false
        }
      }

      if (valid && !this.fileError) {
        this.buttonState = true
        const form = new FormData(this.$refs.form)

        const response = await this.$store.dispatch('form/SEND_FORM_DATA', form)
      } else {
        console.log('valid error')
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/components/form";
</style>
