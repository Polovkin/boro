<template>
  <div
    class="form"
    :class="{'form-estimate':!popupTypeTouch && !isContacts}"
  >
    <form
      id="form"
      ref="form"
      autocomplete="off"
      class="form__content "
    >
      <div class="form__body">
        <div class="form__heading ">
          <template
            v-if="popupTypeTouch || isContacts"
          >
            <div class="animation-mask">
              <h2 class="form__title animation-fade">
                {{ $t('form.title-touch') }}
              </h2>
            </div>
            <div class="animation-mask">
              <p class="form__description animation-fade">
                {{ $t('form.description-touch') }}
              </p>
            </div>
          </template>
          <div
            v-else
            class="animation-mask"
          >
            <h2
              class="form__title"
            >
              {{ $t('form.title-estimate') }}
            </h2>
          </div>
        </div>
        <template v-if="isContacts">
          <div class="form__item animation-move-from-right ">
            <InputCustom
              v-model="formData.name"
              :is-light="isContacts"
              :form-touch="touch"
              is-required
              form-id="form"
              :name="'nameField'"
              :placeholder="$t('form.placeholder.name')"
            />
          </div>
          <div class="form__item animation-move-from-right animation-delay-2">
            <InputCustom
              v-model="formData.email"
              :is-light="isContacts"
              :form-touch="touch"
              is-required
              is-email
              :form-id="'form'"
              :name="'emailField'"
              :placeholder="$t('form.placeholder.email')"
            />
          </div>
          <div class="form__item  animation-move-from-right animation-delay-4">
            <InputCustom
              v-model="formData.phone"
              :is-light="isContacts"
              :form-touch="touch"
              is-phone
              :form-id="'form'"
              :name="'phoneField'"
              :placeholder="$t('form.placeholder.phone')"
            />
          </div>
          <div class="form__item  animation-move-from-right animation-delay-6">
            <InputCustom
              v-model="formData.message"
              :is-light="isContacts"
              :form-touch="touch"
              is-textarea
              :form-id="'form'"
              :name="'message'"
              :placeholder="$t('form.placeholder.message')"
            />
          </div>
        </template>
        <template v-else-if="popupTypeTouch">
          <div class="form__item animation-move-from-right ">
            <InputCustom
              v-model="formData.name"
              :form-touch="touch"
              is-required
              form-id="form"
              :name="'nameField'"
              :placeholder="$t('form.placeholder.name')"
            />
          </div>
          <div class="form__item animation-move-from-right animation-delay-2">
            <InputCustom
              v-model="formData.email"
              :form-touch="touch"
              is-required
              is-email
              :form-id="'form'"
              :name="'emailField'"
              :placeholder="$t('form.placeholder.email')"
            />
          </div>
          <div class="form__item  animation-move-from-right animation-delay-4">
            <InputCustom
              v-model="formData.phone"
              :form-touch="touch"
              is-phone
              :form-id="'form'"
              :name="'phoneField'"
              :placeholder="$t('form.placeholder.phone')"
            />
          </div>
          <div class="form__item  animation-move-from-right animation-delay-6">
            <InputCustom
              v-model="formData.message"
              :form-touch="touch"
              is-textarea
              :form-id="'form'"
              :name="'message'"
              :placeholder="$t('form.placeholder.message')"
            />
          </div>
        </template>
        <template v-else>
          <div class="form__item animation-move-from-right">
            <InputCustom
              v-model="formData.name"
              :form-touch="touch"
              is-required
              form-id="form"
              :name="'nameField'"
              :placeholder="$t('form.placeholder.name')"
            />
          </div>
          <div class="form__item animation-move-from-right animation-delay-2">
            <InputCustom
              v-model="formData.email"
              :form-touch="touch"
              is-required
              is-email
              :form-id="'form'"
              :name="'emailField'"
              :placeholder="$t('form.placeholder.email')"
            />
          </div>
          <div class="form__item animation-move-from-right animation-delay-4">
            <InputCustom
              v-model="formData.phone"
              :form-touch="touch"
              is-required
              is-phone
              :form-id="'form'"
              :name="'phoneField'"
              :placeholder="$t('form.placeholder.phone')"
            />
          </div>
          <div class="form__item animation-move-from-right animation-delay-6">
            <InputCustom
              v-model="formData.deadline"
              is-date
              is-required
              :form-touch="touch"
              :form-id="'form'"
              :name="'deadlineField'"
              :placeholder="$t('form.placeholder.deadline')"
            />
          </div>
          <div
            class="form__item animation-move-from-right animation-delay-8"
            :class="{'form__item--visible':!animationDoneState}"
          >
            <InputCustom
              v-model="formData.budget"
              :form-touch="touch"
              :name="'budgetField'"
              :select-data="selectData"
              :placeholder="$t('form.placeholder.budget')"
            />
          </div>
          <div class="form__item animation-move-from-right animation-delay-10">
            <InputCustom
              v-model="formData.message"
              :form-touch="touch"
              is-textarea
              :form-id="'form'"
              :name="'message'"
              :placeholder="$t('form.placeholder.message')"
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
        <div
          :class="{'form__submit-estimate':!popupTypeTouch}"
          class="form__submit"
        >
          <p
            class="form__terms"
          >
            {{ $t('form.terms') }}
            <a :href="'/'">{{ $t('footer.privacy') }}</a>.
          </p>
          <ButtonPrimary
            is-submit
            @submitEvent="sendForm"
          >
            {{ $t('form.send') }}
          </ButtonPrimary>
        </div>
      </div>
      <div class="form__right animation-move-from-left">
        <div
          v-if="popupTypeTouch"
          class="form__users"
        >
          <UserInfo
            is-dark
            :tags="user.socials"
            :data="user.data"
          />
        </div>
        <div
          v-else
          class="form__tags"
        >
          <h4 class="form__tags-title">
            {{ $t('form.title-estimate2') }}
          </h4>
          <div class="form__tags-wrap">
            <FormTag
              v-for="(item,index) of types"
              :key="index"
              :data="item"
              :index="index"
            />
          </div>
        </div>
      </div>
      <div
        v-if="storeType ==='POPUP_ESTIMATE'"
        :class="{'form__submit-estimate':!popupTypeTouch}"
        class="form__submit form__submit-mobile"
      >
        <p
          v-if="!popupTypeTouch"
          class="form__terms"
        >
          {{ $t('form.terms') }}
          <a :href="'/'">{{ $t('footer.privacy') }}</a>.
        </p>
        <ButtonPrimary
          is-submit
          @submitEvent="sendForm"
        >
          {{ $t('form.send') }}
        </ButtonPrimary>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { POPUP_GET_IN_TOUCH } from '../../../store/types'
import ButtonPrimary from './../buttons/ButtonPrimary'
import UserInfo from './../UserInfo'
import InputCustom from './InputCustom'
import FormTag from './FormTag'

export default {
  name: 'Form',
  components: { FormTag, InputCustom, UserInfo, ButtonPrimary },
  props: {
    isContacts: {
      type: Boolean,
      default: false
    }
  },
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
      selectData: ['< 5000', '5-10K', '10-30K', '30-50K', '>50k'],
      types: ['mobile', 'web', 'website', 'illustration', '3d', 'motion', 'ux', 'design', 'graphic', 'front', 'back', 'other'],
      fileText: 'form.file'
    }
  },

  computed: {
    ...mapState({
      storeType: s => s.popups.popupType,
      storePopupState: s => s.popups.popupState,
      animationDone: s => s.popups.menuAnimationInProgress
    }),
    user () {
      return this.$store.state.app.user
    },
    animationDoneState () {
      return this.animationDone
    },
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
    sendForm () {
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
