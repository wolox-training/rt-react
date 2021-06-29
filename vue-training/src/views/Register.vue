<template lang="pug">
  .main-container
    header-image
    .form-container
      form
        form-input(
          v-for='(input, key) in inputs'
          :key='key'
          :input='input'
          v-model='input.value'
          :validator='$v.inputs[key]'
        )
        form-button(:button='signUpBtn' @handle-click='handleSignUp')
        hr.buttons-line
        form-button(:button='loginBtn' @handle-click='handleLogin')
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { registerUser } from '@/services/UserService'
import HeaderImage from '@/components/HeaderImage'
import FormInput from '@/components/FormInput'
import FormButton from '@/components/FormButton'

export default {
  name: 'Register',
  data () {
    return {
      inputs: {
        firstName: { label: 'First name', type: 'text', value: '' },
        lastName: { label: 'Last name', type: 'text', value: '' },
        email: { label: 'Email', type: 'email', value: '' },
        password: { label: 'Password', type: 'password', value: '' }
      },
      signUpBtn: {
        text: 'Sign up',
        class: 'primary'
      },
      loginBtn: {
        text: 'Login',
        class: 'secondary'
      }
    }
  },
  validations: {
    inputs: {
      email: {
        value: { required, email }
      },
      password: {
        value: {
          required,
          strongPass (value) {
            return (
              /[A-Z]/.test(value) &&
              /[0-9]/.test(value)
            )
          }
        }
      }
    }
  },
  methods: {
    handleSignUp () {
      this.$v.$touch()
      if (this.$v.$error) {
        return
      }
      const user = `
        {
          "user": {
            "email": ${this.inputs.email.value},
            "password": ${this.inputs.password.value},
            "password_confirmation": ${this.inputs.password.value},
            "first_name": ${this.inputs.firstName.value},
            "last_name": ${this.inputs.lastName.value},
            "locale": "en"
          }
        }
      `
      registerUser(user)
        .then(response => {
          if (response.ok) {
            this.redirectLogin()
          }
        })
    },
    handleLogin () {
      this.redirectLogin()
    },
    redirectLogin () {
      this.$router.push({ name: 'login' })
    }
  },
  components: {
    FormInput,
    FormButton,
    HeaderImage
  }
}
</script>

<style scoped lang="scss">
  @import "@/scss/variables.scss";

  .main-container {
    align-items: center;
    background-color: $white-smoke;
    border-top: solid 4px $deep-sky-blue;
    display: flex;
    flex-direction: column;
    font-family: $sans-serif;
    margin: 100px auto;
    max-width: 300px;
    padding: 30px 20px;
    width: 100%;
  }

  .form-container {
    width: 100%;
  }

  .buttons-line {
    border: 1px solid $mercury;
    margin: 20px 0;
  }

  .registered-message {
    margin: 0 0 30px;
    color: $green;
  }
</style>
