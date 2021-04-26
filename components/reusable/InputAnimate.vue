<template lang="pug">
  //Name
  label.input-custom__label(
    v-if="typeName"
    :class="{'input-custom--error': ($v.name.$error && $v.name.$dirty) ,'input-custom--valid': !$v.name.$error && $v.name.$dirty}")

    span.input-custom__placeholder(:class="{'input-custom__placeholder--animate':placeholderAnimate}")
      | {{ placeholder ? placeholder : 'placeholder' }}

    input.input-custom.input-custom__animate(
      v-model='$v.name.$model'
      type='text'
      autocomplete='new-password'
      @click='placeholderAnimate=true'
      @blur='unfocused'
      @input='updateValue($event.target.value)')

    span.input-custom__error-msg.animation-shake(v-if='!$v.name.required && $v.name.$dirty')
      | Field is required
    span.input-custom__error-msg.animation-shake(v-if='!$v.name.minLength')
      | Password must have at least {{ $v.name.$params.minLength.min }} letters.
    span.input-custom__error-msg.animation-shake(v-if='!$v.name.maxLength')
      | Password must have no more than {{ $v.name.$params.maxLength.max }} letters.
  //Password
  label.input-custom__label(
    v-else-if="typePassword"
    :class="{'input-custom--error': $v.password.$error && $v.password.$dirty,'input-custom--valid': !$v.password.$error && $v.password.$dirty}")

    span.input-custom__placeholder(:class="{'input-custom__placeholder--animate':placeholderAnimate}")
      | {{ placeholder ? placeholder : 'password' }}

    input.input-custom.input-custom__animate(
      v-model='$v.password.$model'
      :type="passwordState ? 'text' : 'password'"
      autocomplete='new-password'
      @click='placeholderAnimate=true'
      @blur='unfocused'
      @input='updateValue($event.target.value)')

    span.input-custom__eye(
      v-if='$v.password.$dirty'
      :class="{'input-custom__eye--hidden':passwordState}"
      @click='passwordState=!passwordState')
    span.input-custom__error-msg.animation-shake(v-if='!$v.password.required && $v.password.$dirty')
      | Field is required
    span.input-custom__error-msg.animation-shake(v-if='!$v.password.minLength')
      | Password must have at least {{ $v.password.$params.minLength.min }} letters.
    span.input-custom__error-msg.animation-shake(v-if='!$v.password.maxLength')
      | Password must have no more than {{ $v.password.$params.maxLength.max }} letters.

  //Email
  label.input-custom__label(
    v-else-if="typeEmail"
    :class="{ 'input-custom--error': $v.email.$error && $v.email.$dirty ,'input-custom--valid': !$v.email.$error && $v.email.$dirty}")
    span.input-custom__placeholder(:class="{'input-custom__placeholder--animate':placeholderAnimate}")
      | {{ placeholder ? placeholder : 'email' }}
    input.input-custom.input-custom__animate(
      v-model.lazy='$v.email.$model'
      autocomplete='true'
      type='email'
      @click='placeholderAnimate=true'
      @blur='unfocused'
      @input='updateValue($event.target.value)')
    span.input-custom__error-msg.animation-shake(v-if='!$v.email.required && $v.email.$dirty')
      | Field is required
    span.input-custom__error-msg.animation-shake(v-if='!$v.email.email')
      | Email is not valid
  //Text
  label.input-custom__label(
    v-else
    :class="{'input-custom--error': ($v.text.$error && $v.text.$dirty) ,'input-custom--valid': !$v.text.$error && $v.text.$dirty}")

    span.input-custom__placeholder(:class="{'input-custom__placeholder--animate':placeholderAnimate}")
      | {{ placeholder ? placeholder : 'placeholder' }}

    input.input-custom.input-custom__animate(
      v-model='$v.text.$model'
      type='text'
      autocomplete='new-password'
      @click='placeholderAnimate=true'
      @blur='unfocused'
      @input='updateValue($event.target.value)')

    //span.input-custom__error-msg.animation-shake(v-if='!$v.text.required && $v.text.$dirty')
      | Field is required

</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'InputCustom',
  mixins: [validationMixin],
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    },
    text: {
      minLength: minLength(3),
      maxLength: maxLength(20)
    }
  },
  props: {
    typePassword: {
      type: Boolean,
      default: false
    },
    typeName: {
      type: Boolean,
      default: false
    },
    typeEmail: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    validate: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      placeholderAnimate: false,
      focus: false,
      name: '',
      email: '',
      text: '',
      password: null,
      passwordState: false
    }
  },
  mounted () {
    this.type = this.typePassword ? 'password' : this.typeEmail ? 'email' : this.name ? 'name' : 'text'
  },
  methods: {
    updateValue (value) {
      if (!this.$v[this.type].$invalid) {
        this.$emit('input', value)
      } else {
        this.$emit('input', null)
      }
    },
    unfocused (e) {
      this.$v.$touch()
      this.placeholderAnimate = !!e.target.value
      this.focus = false
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
$border_weight: 1px;@import 'assets/scss/core/headings';

.input-custom {
  @extend h6;
  height: $input_height;

  padding-bottom: 16px;

  color: $input__font-color;
  line-height: unset;

  transition: all .4s ease;

  &__animate {
    position: relative;
    z-index: z(bg-content);
  }

  &__label {
    position: relative;

    display: flex;

    padding-top: $label_top_padding;
    padding-bottom: $label_bottom_padding;
  }

  &__placeholder {
    @extend h5;
    position: absolute;
    top: 5px + $label_bottom_padding;

    z-index: z(content);

    color: $input__placeholder-color;
    line-height: unset;

    transform: translateY(0);

    transition: all .4s ease;

    &--animate {
      color: $color__font--tertiary;
      font-size: 10px;

      transform: translate(0%, -20px);
    }
  }

  &__error-msg {
    position: absolute;
    bottom: 1px;

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
  border: {
    bottom: $border_weight solid $color__light;
    top-color: transparent;
    left-color: transparent;
    right-color: transparent;
    bottom-color: $color__light;
  };

  &--active {
    border: {
      //bottom: 1px solid green;
    };
  }

  &--valid {

    .input-custom__placeholder {
      color: $valid_color;
    }

    input {
      border-bottom: $border_weight solid $valid_color;

      color: $valid_color;
    }
  }

  &--error {

    .input-custom__placeholder {
      color: $invalid_color;
    }

    input {
      border-bottom: $border_weight solid $invalid_color;

      color: $invalid_color;
    }
  }
}

</style>
