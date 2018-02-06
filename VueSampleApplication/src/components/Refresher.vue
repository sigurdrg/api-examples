<template lang="pug">
#refresher(v-if="expired")
  md-progress-spinner.md-accent(
    md-mode="indeterminate"
    :md-diameter="100"
  )
</template>

<script>
export default {
  name: 'Refresher',
  computed: {
    expired () {
      return this.$store.getters['App/expired']
    }
  },
  watch: {
    expired: function (is_expired) {
      if (is_expired)
        this.$store.dispatch('App/auth')
    }
  },
  mounted () {
    this.$store.dispatch('App/auth')
      .then(() => {
        this.$store.dispatch('Bank/load')
        this.$store.dispatch('Customers/load')
      })
  }
}
</script>

<style lang="scss" scoped>
#refresher {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #555;

  .md-progress-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
  }
}
</style>
