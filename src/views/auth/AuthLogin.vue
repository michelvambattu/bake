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
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
         >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
          <b-form-group id="input-group-2" label="Password:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.password"
              placeholder="Passowrd"
              required
              type="password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" class="mr-2">Login</b-button>
        </b-form>
      </b-card-text>
    </b-card>
    <div class="col-md-3">&nbsp;</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.axios.post(process.env.VUE_APP_API_BASE_URL + '/login', this.form, {
          headers: {
            // remove headers
          }
        }).then((response) => {
            if (response.data.data.status === '200') {
                this.$router.push('/home?success=Successfully logged In!')
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
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    mounted: function () {
      if (this.$route.query.success) {
        this.$bvToast.toast('Success', {
          title: this.$route.query.success,
          autoHideDelay: 3000,
          appendToast: true,
            variant: 'success'
        })
      }
    }
  }
</script>
