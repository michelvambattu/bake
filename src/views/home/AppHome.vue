<template>
<div class="row">
    <div class="col-md-3">&nbsp;</div>
    <b-card
    title="Welcome!"
    class="col-md-6 mt-5"
  ></b-card>
  </div>
</template>

<script>
export default {

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
