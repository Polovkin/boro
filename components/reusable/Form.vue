<template>
  <div class="form">
    <div class="form__heading">
      <template
        v-if="popupTypeTouch"
      >
        <h2 class="form__title animation-move-from-down">
          {{ $t('form.title-touch') }}
        </h2>
        <p class="form__description animation-move-from-down">
          {{ $t('form.description-touch') }}
        </p>
      </template>
      <h2
        v-else
        class="form__title"
      >
        {{ $t('form.title-estimate') }}
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
            :placeholder="$t('form.placeholder.name')"
          />
          <InputCustom
            v-model="formData.email"
            class="form__item"
            type-email
            :touch="touch"
            :input-name="'email'"
            :placeholder="$t('form.placeholder.email')"
          />
          <InputCustom
            v-model="formData.phone"
            class="form__item"
            :touch="touch"
            :input-name="'phone'"
            :placeholder="$t('form.placeholder.phone')"
          />
          <InputCustom
            v-model="formData.message"
            class="form__item"
            :touch="touch"
            :input-name="'message'"
            :placeholder="$t('form.placeholder.message')"
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
              :placeholder="$t('form.placeholder.name')"
            />
            <InputCustom
              v-model="formData.email"
              class="form__item"
              type-email
              :touch="touch"
              :input-name="'email'"
              :placeholder="$t('form.placeholder.email')"
            />
            <InputCustom
              v-model="formData.phone"
              class="form__item"
              :touch="touch"
              :input-name="'phone'"
              :placeholder="$t('form.placeholder.phone')"
            />
            <InputCustom
              v-model="formData.deadline"
              class="form__item"
              :touch="touch"
              :input-name="'deadline'"
              :placeholder="$t('form.placeholder.deadline')"
            />
          </div>
        </template>
        <div class="form__submit">
          <ButtonPrimary is-submit @submitEvent="submit">
            {{ $t('form.submit') }}
          </ButtonPrimary>
        </div>
      </form>
      <div class="form__right animation-move-from-left">
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
  components: { UserInfo, ButtonPrimary, InputCustom },
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
      storeType: s => s.popups.popupType
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
