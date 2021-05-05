<template>
  <div class="form">
    <div class="form__heading">
      <template
        v-if="popupTypeTouch"
      >
        <h2 class="form__title">
          Get In Touch
        </h2>
        <p class="form__description">
          Fill out the form or send an email
        </p>
      </template>
      <h2
        v-else
        class="form__title"
      >
        Estimate project
      </h2>
    </div>

    <div class="form__content">
      <form class="form__body">
        <template v-if="popupTypeTouch">
          <InputCustom
            v-model="formData.name"
            class="form__item"
            type-name
            :touch="touch"
            :input-name="'name'"
            :placeholder="'Your name'"
          />
          <InputCustom
            v-model="formData.email"
            class="form__item"
            type-email
            :touch="touch"
            :input-name="'email'"
            :placeholder="'Email'"
          />
          <InputCustom
            v-model="formData.phone"
            class="form__item"
            :touch="touch"
            :input-name="'phone'"
            :placeholder="'Phone number'"
          />
          <InputCustom
            v-model="formData.message"
            class="form__item"
            :touch="touch"
            :input-name="'message'"
            :placeholder="'Message'"
          />
        </template>
        <template v-else>
          <div class="form__body-estimate">
            <InputCustom
              v-model="formData.name"
              class="form__item"
              type-name
              :touch="touch"
              :input-name="'name'"
              :placeholder="'Your name'"
            />
          </div>
        </template>
        <div class="form__submit">
          <ButtonPrimary is-submit @submitEvent="submit">
            Send
          </ButtonPrimary>
        </div>
      </form>
      <div class="form__right">
        <div
          v-if="popupTypeTouch"

          class="form__users"
        >
          <UserInfo
            v-for="(user,index) of users"
            :key="index"
            is-dark
            :tags="user.tags"
            :data="user.info"
          />
        </div>
        <div
          v-else
          class="form__tags"
        />
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { POPUP_GET_IN_TOUCH } from '../../store/types'
import InputCustom from './InputAnimate'
import ButtonPrimary from './buttons/ButtonPrimary'
import UserInfo from './UserInfo'
import FooterTags from './FooterTags'

export default {
  name: 'Form',
  components: { FooterTags, UserInfo, ButtonPrimary, InputCustom },
  data () {
    return {
      touch: false,
      type: POPUP_GET_IN_TOUCH,
      formData: {
        name: null,
        email: null,
        phone: null,
        message: null
      },
      users: [

        {
          info: {
            img: 'anna.jpg',
            position: 'Account manager',
            name: 'Anna Haiduk'
          },
          tags: [
            {
              name: 'Viber',
              icon: 'facebook.png',
              link: '/'
            },
            {
              name: 'WhatsApp',
              icon: 'facebook.png',
              link: '/'
            },
            {
              name: 'Telegram',
              icon: 'facebook.png',
              link: '/'
            }
          ]
        }
      ]
    }
  },

  computed: {
    ...mapState({
      storeType: s => s.app.popupType
    }),
    popupTypeTouch () {
      return this.storeType === this.type
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
    submit () {
      this.touch = true
      const valid = false
    },
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
