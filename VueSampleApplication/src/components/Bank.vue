<template lang="pug">
#bank(v-if="accounts.length > 0")
  md-list.md-double-line.md-elevation-
1    md-list-item(
      v-for="(item, index) in accounts"
      :key="index"
    )
      md-avatar.md-avatar-icon.md-accent {{ initials }}
      .md-list-item-text
        span {{ item.name }}
        span {{ item.accountNumber }}
      md-button.md-icon-button.md-list-action
        md-icon keyboard_arrow_down
</template>

<script>
export default {
  name: 'Bank',
  computed: {
    accounts () {
      return this.$store.getters['Bank/accounts']
    },
    initials () {
      const data = this.$store.getters['Customers/data']
      return data == null ? null : data.firstName.substr(0, 1) + data.lastName.substr(0, 1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
