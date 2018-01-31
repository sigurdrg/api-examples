<template lang="pug">
#app.md-layout.md-alignment-center
  refresher
  .md-layout-item.md-medium-size-33.md-small-size-50.md-xsmall-size-100
    customers
    bank
</template>

<script>
import Bank from '@/components/Bank'
import Customers from '@/components/Customers'
import Refresher from '@/components/Refresher'

export default {
  name: 'App',
  components: {
    Bank,
    Customers,
    Refresher
  }
}
</script>

<style lang="scss" scoped>
#app {
  padding: 10px;
}
</style>
