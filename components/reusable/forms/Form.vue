<template>
  <div class="form">
    <div class="form__heading">
      <template
        v-if="popupTypeTouch"
      >
        <h2 class="form__title animation-fade">
          {{ $t('form.title-touch') }}
        </h2>
        <p class="form__description animation-fade">
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

    <form
      id="form"
      ref="form"
      autocomplete="off"
      class="form__content"
    >
      <div

        class="form__body"
      >
        <template v-if="popupTypeTouch">
          <InputCustom
            v-model="formData.name"
            :form-touch="touch"
            is-required
            class="form__item"
            form-id="form"
            :name="'nameField'"
            :placeholder="$t('form.placeholder.name')"
          />
          <InputCustom
            v-model="formData.email"
            :form-touch="touch"
            is-required
            is-email
            class="form__item"
            :form-id="'form'"
            :name="'emailField'"
            :placeholder="$t('form.placeholder.email')"
          />
          <InputCustom
            v-model="formData.phone"
            :form-touch="touch"
            is-required
            is-phone
            class="form__item"
            :form-id="'form'"
            :name="'phoneField'"
            :placeholder="$t('form.placeholder.phone')"
          />
          <InputCustom
            v-model="formData.name"
            :form-touch="touch"
            is-textarea
            class="form__item"
            :form-id="'form'"
            :name="'message'"
            :placeholder="$t('form.placeholder.message')"
          />
        </template>
        <template v-else>
          <div class="form__body-estimate">
            <InputCustom
              v-model="formData.name"
              :form-touch="touch"
              is-required
              class="form__item"
              form-id="form"
              :name="'nameField'"
              :placeholder="$t('form.placeholder.name')"
            />
            <InputCustom
              v-model="formData.email"
              :form-touch="touch"
              is-required
              is-email
              class="form__item"
              :form-id="'form'"
              :name="'emailField'"
              :placeholder="$t('form.placeholder.email')"
            />
            <InputCustom
              v-model="formData.phone"
              :form-touch="touch"
              is-required
              is-phone
              class="form__item"
              :form-id="'form'"
              :name="'phoneField'"
              :placeholder="$t('form.placeholder.phone')"
            />
            <InputCustom
              v-model="formData.deadline"
              :form-touch="touch"
              class="form__item"
              :form-id="'form'"
              :name="'deadlineField'"
              :placeholder="$t('form.placeholder.phone')"
            />
            <InputCustom
              v-model="formData.budget"
              :form-touch="touch"
              :name="'budgetField'"
              class="form__item"
              :select-data="selectData"
              :placeholder="$t('form.placeholder.budget')"
            />
          </div>

          <div
            class="form__file"
          >
            <label for="formFile">{{ $t('form.file') }}</label>
            <input
              id="formFile"
              ref="file"
              autocomplete="off"
              type="file"
              name="file"
              class="file__input"
              @change="handleFileUpload()"
            >
          </div>
        </template>
        <div class="form__submit">
          <p
            v-if="!popupTypeTouch"
            class="form__terms"
          >
            {{ $t('form.checkboxes.terms') }}
            <a :href="'/'">{{ $t('footer.privacy') }}</a>.
          </p>
          <ButtonPrimary
            is-submit
            @submitEvent="sendForm"
          >
            {{ $t('form.submit') }}
          </ButtonPrimary>
        </div>
      </div>
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
        >
          <div
            v-for="(item,index) of types"
            :key="index"
            class="form__tags-item"
          >
            <input
              :id="`tag_${index}`"
              name="formTags"
              :value="item"
              :name="item"
              hidden
              type="checkbox"
            >
            <label
              class="form__tags-label"
              :for="`tag_${index}`"
            > {{ $t(`form.checkboxes.${item}`) }}</label>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { POPUP_GET_IN_TOUCH } from '../../../store/types'
import LinkPrimary from '../LinkPrimary'
import ButtonPrimary from './../buttons/ButtonPrimary'
import UserInfo from './../UserInfo'
import InputCustom from './InputCustom'

export default {
  name: 'Form',
  components: { LinkPrimary, InputCustom, UserInfo, ButtonPrimary },
  data () {
    return {
      touch: false,
      type: POPUP_GET_IN_TOUCH,
      formData: {
        name: null,
        email: null,
        phone: null,
        message: null,
        budget: null,
        deadline: null
      },
      users: [
        {
          info: {
            img: 'anna.jpg',
            position: 'user.account-manager',
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
      ],
      selectData: ['< 5000', '5-10K', '10-30K', '30-50K', '>50k'],
      types: ['mobile', 'web', 'website', 'illustration', '3d', 'motion', 'ux', 'design', 'graphic', 'front', 'back', 'other'],
      fileText: 'form.file'
    }
  },

  computed: {
    ...mapState({
      storeType: s => s.popups.popupType,
      storePopupState: s => s.popups.popupState
    }),
    popupTypeTouch () {
      return this.storeType === this.type
    },
    popupState () {
      return this.storePopupState
    }
  },
  watch: {
    popupState (newValue) {
      if (!newValue) {
        this.touch = false
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
      // console.log(this.formData)
      const form = new FormData(this.$refs.form)

      for (const value of form.values()) {
        console.log(value)
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/components/form";
</style>
