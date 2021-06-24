<template lang="pug">
  #app
    .main-container
      img.header-image(alt='Wolox logo' src='@/assets/header-image.png')
      .form-container
        form
          form-input(
            v-for='(input, key) in inputs'
            :key='key'
            :input='input'
            v-model='input.value'
          )
          form-button(:button='signUpBtn' @handleClick='handleSignUp')
          hr.buttons-line
          FormButton(:button='loginBtn' @handleClick='handleLogin')
</template>

<script>
import FormInput from '@/components/FormInput.vue'
import FormButton from '@/components/FormButton.vue'

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
        class: 'sign-up'
      },
      loginBtn: {
        text: 'Login',
        class: 'login'
      }
    }
  },
  methods: {
    handleSignUp () {
      console.log(`
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
      `)
    },
    handleLogin () {
      console.log('[handle-login]')
    }
  },
  components: {
    FormInput,
    FormButton
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
    font-family: sans-serif;
    margin: 100px auto;
    max-width: 300px;
    padding: 30px 20px;
    width: 100%;
  }

  .header-image {
    margin-bottom: 40px;
    width: 100%
  }

  .form-container {
    width: 100%;
  }

  .buttons-line {
    border: 1px solid $mercury;
    margin: 0 0 20px;
  }
</style>
