<template lang="pug">
  transition(name='fade' mode='out-in')
    .main-container(v-if='show')
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
      show: true,
      inputs: {
        email: { label: this.$t('email'), type: 'email', value: '' },
        password: { label: this.$t('passw'), type: 'password', value: '' }
      },
      signUpBtn: {
        text: this.$t('signup'),
        class: 'secondary'
      },
      loginBtn: {
        text: this.$t('login'),
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
            this.show = false
            localStorage.token = response.data.access_token
            this.redirect('books')
          }
        })
    },
    handleSignUp () {
      this.redirect('register')
    },
    redirect (name) {
      this.$router.push({ name })
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
    margin: 100px auto;
    max-width: 300px;
    padding: 30px 20px;
    width: var(--full-width);
  }

  .form-container {
    width: var(--full-width);
  }

  .buttons-line {
    border: 1px solid $mercury;
    margin: 20px 0;
  }

  .fade-leave-active {
    transition: opacity 1s
  }

  .fade-leave-to {
    opacity: 0
  }
</style>
