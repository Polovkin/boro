<template lang="pug">
  label.input-custom__label.select-custom__label(v-if="selectData" v-click-outside="hideDropdownDirective")
    span.input-custom__label-line(:class="{'input-custom__label-line--active':selectDropdownState}")
    span.input-custom__placeholder(:class="{'input-custom__placeholder--animate':selectedItem}")
      | {{ placeholder ? placeholder : 'select' }}
    div.select-custom.input-custom__animate(@click='dropdownToggle')
      span.select-custom__selected {{selectedItem}}
    div.select-custom__dropdown(:class="{'select-custom__dropdown--active':selectDropdownState}")
      input(:value="selectedItem" type="hidden" :name="name")
      ul
        li.select-custom__dropdown-item(
          :key="index"
          v-for="(item,index) of selectData",
          @click="selectedValue(item)") {{item}}
    span.input-custom__error-msg.animation-shake(v-if="!selectedItem && formTouch")
      | {{ $t('form.error.required') }}

  label.input-custom__label(v-else :for="inputId" :class="{'input-custom--error': invalid ,'input-custom--light': isLight ,'input-custom--valid':valid}")
    span.input-custom__label-line(:class="{'input-custom__label-line--active':isLineActive}")
    span.input-custom__placeholder(:class="{'input-custom__placeholder--animate':isActive}")
      | {{ placeholder }}
    span.input-custom__optional(v-if="!isRequired  && !isActive") {{ $t('form.optional') }}
    template(v-if="isTextarea")
      textarea.input-custom__textarea(
        v-model.lazy='$v.textarea.$model'
        :id="inputId"
        :name="name"
        :form="formId"
        @focus="focus"
        @blur="focusOut"
      )

    template(v-else)
      input.input-custom.input-custom__animate(
        v-if="isPassword"
        v-model.lazy='$v.password.$model'
        :id="inputId"
        :name="name"
        :form="formId"
        type="password"
        autocomplete="new-password"
        @focus="focus"
        @blur="focusOut"
      )

      input.input-custom.input-custom__animate(
        v-else-if="isEmail"
        v-model.lazy='$v.email.$model'
        :id="inputId"
        :name="name"
        :form="formId"
        autocomplete='new-password'
        type='email'
        @focus="focus"
        @blur="focusOut"
      )
      input.input-custom.input-custom__animate(
        v-else-if="isPhone"
        v-model.lazy='$v.phone.$model'
        :id="inputId"
        :name="name"
        :form="formId"
        type='tel'
        autocomplete="new-password"
        @focus="focus"
        @blur="focusOut"
        @keypress="isNumber($event)"
      )
      input.input-custom.input-custom__animate(
        v-else-if="isDate"
        v-model='deadline'
        :id="inputId"
        :name="name"
        :form="formId"
        v-mask="'##/##/##'"
        type="search"
        autocomplete="off"
        @focus="focus"
        @blur="focusOut"
        @keypress="isNumber($event)"
      )
      input.input-custom.input-custom__animate(
        v-else
        v-model.lazy='$v.simpleText.$model'
        :id="inputId"
        :name="name"
        :form="formId"
        type="search"
        autocomplete="off"
        @focus="focus"
        @blur="focusOut"
      )
    template(v-if="isRequired")
      span.input-custom__error-msg.animation-shake(v-if="!$v[validatorType].required && $v[validatorType].$dirty")
        | {{ $t('form.error.required') }}
    template(v-if="lengthValidatorTypes")
      span.input-custom__error-msg.animation-shake(v-if='!$v[validatorType].minLength')
        | {{ $t('form.error.min') }} {{ $v[validatorType].$params.minLength.min }}
      span.input-custom__error-msg.animation-shake(v-if='!$v[validatorType].maxLength')
        | {{ $t('form.error.max') }} {{ $v[validatorType].$params.maxLength.max }}.
    template(v-if="isEmail")
      span.input-custom__error-msg.animation-shake(v-if='!$v.email.email')
        | {{ $t('form.error.invalid-email') }}

</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'

export default {
  name: 'InputCustom',
  mixins: [validationMixin],
  validations: {
    simpleText: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20)
    },
    email: {
      required,
      email
    },
    deadline: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(8)
    },
    phone: {
      required,
      minLength: minLength(12),
      maxLength: maxLength(12)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    },
    textarea: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(200)
    }
  },
  props: {
    selectData: {
      type: Array,
      default: null
    },
    formTouch: {
      type: Boolean,
      default: false,
      required: true
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    isDate: {
      type: Boolean,
      default: false
    },
    isTextarea: {
      type: Boolean,
      default: false
    },
    isPassword: {
      type: Boolean,
      default: false
    },
    isEmail: {
      type: Boolean,
      default: false
    },
    isPhone: {
      type: Boolean,
      default: false
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    isLight: {
      type: Boolean,
      default: false
    },
    formId: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isActive: false,
      isLineActive: false,
      simpleText: '',
      textarea: '',
      phone: '',
      email: '',
      password: '',
      deadline: '',
      lengthTypes: ['textarea', 'simpleText', 'password'],
      selectedItem: '',
      selectDropdownState: false,
      test: false
    }
  },
  computed: {
    ...mapState({
      dropdown: s => s.form.customDropdownState
    }),
    formSuccess () {
      return this.$store.state.form.success
    },
    inputId () {
      return `input__${this.name}`
    },
    validatorType () {
      return this.isTextarea
        ? 'textarea'
        : this.isEmail
          ? 'email'
          : this.deadline
            ? 'deadline'
            : this.isPhone
              ? 'phone'
              : this.isPassword
                ? 'password'
                : 'simpleText'
    },
    lengthValidatorTypes () {
      return 'minLength' in this.$v[this.validatorType] && 'maxLength' in this.$v[this.validatorType]
    },
    valid () {
      const elem = this.$v[this.validatorType]
      return !elem.$error && elem.$dirty
    },
    invalid () {
      const elem = this.$v[this.validatorType]
      if (this.isRequired) {
        return elem.$error && elem.$dirty
      } else {
        return !elem.minLength || !elem.maxLength
      }
    }
  },
  watch: {
    formTouch (newValue) {
      if (newValue) {
        this.$v.$touch()
      }
    },
    deadline (newValue) {

    }
  },
  methods: {
    hideDropdownDirective () {
      this.selectDropdownState = false
    },
    isNumber (evt) {
      evt = (evt) || window.event
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    selectedValue (item) {
      this.selectedItem = item
      this.selectDropdownState = false
    },
    focus () {
      this.isActive = true
      this.isLineActive = this.isActive
    },
    focusOut (e) {
      this.$v.$touch()
      const value = e.target.value
      this.isActive = !!value
      this.isLineActive = false
      if (this.selectData) {
        this.$emit('input', this.selectData)
      } else if (!this.$v[this.validatorType].$invalid) {
        this.$emit('input', value)
      } else {
        this.$emit('input', null)
      }
    },
    dropdownToggle () {
      this.selectDropdownState = !this.selectDropdownState
      this.$store.commit('form/CLOSE_CUSTOM_DROPDOWN', this.selectDropdownState)
    }
  }
}
</script>
<style
    lang="scss">

$label_top_padding: 15px;
$label_bottom_padding: 20px;
$invalid_color: #fff;
$valid_color: #fff;
$border_weight: 1px;
$placeholder_animation_duration: .4s;

input[autocomplete='off']:read-only {
  background-color: transparent !important;
}

.input-custom {
  @include h6;
  position: relative;

  height: $input_height;

  padding-bottom: 12px;

  border: transparent;

  color: $input__font-color;
  line-height: unset;

  transition: all $placeholder_animation_duration ease;

  &__animate {
    position: relative;
    z-index: z(bg-content);
  }

  &__placeholder {
    @include h5;
    position: absolute;
    top: 4px + $label_bottom_padding;
    left: 2px;
    z-index: z(content);

    color: $input__placeholder-color;
    line-height: unset;

    transform: translateY(0);

    transition: all cubic-bezier(.4, 0, .2, 1) .15s;

    &--animate {
      color: $color__font--tertiary;
      font-size: 10px;

      transform: translate(0%, -20px);
    }

  }

  &__label {
    position: relative;

    display: flex;

    padding-top: $label_top_padding;
    padding-bottom: $label_bottom_padding;

    &-line {
      position: absolute;
      bottom: $label_bottom_padding;

      width: 100%;
      max-width: 0;
      height: 1px;
      overflow: hidden;

      transition: max-width ease .6s;

      &:after, &:before {
        @include pseudoElement(100%);
      }

      &:after {
        z-index: z(bg-content);

        background-color: $color__light_24;
      }

      &:before {
        z-index: z(content);
        will-change: transform, background-color;

        background-color: $color__light;

        transform: scale(0);
        transform-origin: 100% 50%;

        transition: transform .35s;
        transition-timing-function: cubic-bezier(.25, .46, .45, .94);
      }

      &--active {

        &:before {

          transform: scale(1);
          transform-origin: 0 50%;

          transition-timing-function: ease;
        }
      }
    }

  }

  &__optional {
    @include body-secondary;
    position: absolute;
    top: (($input_height - $input__font-size) / 2) + $label_top_padding - 2px;
    right: 0;

    color: $color__font--tertiary;
  }

  &__error-msg {
    position: absolute;
    bottom: 1px;
    left: 2px;

    color: $invalid_color;
    font-size: 11px;

  }

  &__eye {
    @include size(20px);
    position: absolute;
    top: 18px + $label_bottom_padding;
    right: 1rem;
    z-index: z(content);

    display: block;

    cursor: pointer;
    background: {
      size: contain;
      //image: url('#{$img_path}/icons/eye.svg?data');
    };

    &--hidden {
      //background-image: url('#{$img_path}/icons/eye-hide.svg?data') !important;
    }
  }

  &__textarea {
    @extend .input-custom;
    height: $input_height - 2px;
    //max-height: $input_height;

    padding-top: ($input_height - $input__font-size) / 2;
    padding-bottom: 0;

    background-color: transparent;

    outline: none;

    resize: none;

    &::-webkit-scrollbar {

      width: 4px;

      &-track {
        background: #f1f1f1;
      }

      &-thumb {
        background: #888;

        &:hover {
          background: #555;
        }
      }
    }
  }

  &--valid {

    .input-custom__placeholder {
      color: $valid_color;
    }

    input {
      //border-bottom: $border_weight solid $valid_color;

      color: $valid_color;
    }
  }

  &--error {

    .input-custom__placeholder {
      color: $invalid_color;
    }

    input {
      color: $invalid_color;
    }
  }

  &--light {
    color: $color__font--primary;

    .input-custom__placeholder, .input-custom__textarea, .input-custom {
      color: $color__font--primary;
    }

    .input-custom__optional {
      color: $color__font_dark--tertiary;
    }

    .input-custom__label-line {

      &:after {
        background-color: $color__dark_16;
      }

      &:before {
        background-color: $color__dark;
      }
    }
  }
}

.select-custom {
  @extend .input-custom;
  position: relative;
  z-index: z(content);

  width: 100%;

  background-color: transparent;

  &__label {
    width: 100%;
  }

  &__selected {
    @extend .input-custom__placeholder;
    @include h5;
    top: 5px;

    transition: opacity ease .2 $placeholder_animation_duration;
  }

  &__dropdown {
    position: absolute;
    top: $input_height+$label_bottom_padding+$label_top_padding;
    left: 0;
    z-index: z(content);

    width: inherit;
    visibility: hidden;

    padding: 24px;

    border: 1px solid $color__light_16;
    border-radius: 4px;

    background-color: $color__dark;

    opacity: 0;

    transition: all ease .2s;

    &-item {
      @include title-link();
      color: $color__font-light--primary;

      cursor: pointer;
    }

    &--active {
      visibility: visible;

      opacity: 1;
    }
  }
}

</style>
