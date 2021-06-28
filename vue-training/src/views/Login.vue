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
        form-button(:button='loginBtn' @handle-click='handleLogin')
        hr.buttons-line
        form-button(:button='signUpBtn' @handle-click='handleSignUp')
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { sessionUser } from '@/services/UserService'
import HeaderImage from '@/components/HeaderImage'
import FormInput from '@/components/FormInput'
import FormButton from '@/components/FormButton'

export default {
  name: 'Login',
  components: {
    FormButton,
    FormInput,
    HeaderImage
  },
  data () {
    return {
      inputs: {
        email: { label: 'Email', type: 'email', value: '' },
        password: { label: 'Password', type: 'password', value: '' }
      },
      signUpBtn: {
        text: 'Sign up',
        class: 'secondary'
      },
      loginBtn: {
        text: 'Login',
        class: 'primary'
      }
    }
  },
  validations: {
    inputs: {
      email: {
        value: { required, email }
      },
      password: {
        value: { required }
      }
    }
  },
  methods: {
    handleLogin () {
      this.$v.$touch()
      if (this.$v.$error) {
        return
      }

      const user = {
        session: {
          email: this.inputs.email.value,
          password: this.inputs.password.value
        }
      }

      sessionUser(user)
        .then(response => {
          if (response.ok) {
            console.log('[access-token]', response.data.access_token)
          }
        })
    },
    handleSignUp () {
      this.$router.push({ name: 'register' })
    }
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

  .form-container {
    width: 100%;
  }

  .buttons-line {
    border: 1px solid $mercury;
    margin: 20px 0;
  }
</style>
