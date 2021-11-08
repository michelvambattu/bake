<template>
  <div class="row">
    <div class="col-md-3">&nbsp;</div>
    <b-card
    title="Please Login"
    class="col-md-6 mt-5"
  >
    <b-card-text>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" col lg="6">
        <b-form-group
            id="name-group"
            label="Name:"
            label-for="name"
            >
            <b-form-input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Enter Name"
            required
        ></b-form-input>
        </b-form-group>
        <b-form-group
            id="email-group"
            label="Email address:"
            label-for="email"
            >
            <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
          <b-form-group id="password-group" label="Password:" label-for="input-3">
            <b-form-input
            id="password"
            v-model="form.password"
            placeholder="Password"
            required
            type="password"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="confirm-password-group" label="Confirm Password:" label-for="password-confirmation">
            <b-form-input
            id="password-confirmation"
            v-model="form.password_confirmation"
            placeholder=" Confirm Password"
            required
            type="password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" class="mr-2">Register</b-button>
        </b-form>
      </b-card-text>
    </b-card>
    <div class="col-md-3">&nbsp;</div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: null,
          password_confirmation: null
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.axios.post(process.env.VUE_APP_API_BASE_URL + '/register', this.form, {
            headers: {
                // remove headers
            }
        }).then((response) => {
            console.log(response.data.data.title)
            if (response.data.data.status === '200') {
                this.$router.push('/?success=Successfully Registered! Please Login')
            } else {
                this.$bvToast.toast(response.data.data.description, {
                  title: response.data.data.title,
                  autoHideDelay: 3000,
                  appendToast: true,
                  variant: 'danger'
                })
            }
        })
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.passowrd = null
        this.form.password_confirmation = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
