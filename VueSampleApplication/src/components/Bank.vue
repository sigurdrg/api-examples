<template lang="pug">
#bank(v-if="accounts.length > 0")
  md-list.md-double-line.md-elevation-1
    md-list-item(
      v-for="(item, index) in accounts"
      :key="index"
      md-expand
      :md-expanded.sync="expanded"
      @click="fetchTransactions(item.accountNumber)"
    )
      md-avatar.md-avatar-icon.md-accent {{ initials }}
      .md-list-item-text
        span {{ item.name }}
        span {{ item.accountNumber }}
      
      md-list.md-dense(slot="md-expand")
        md-list-item(
          v-for="(transaction, index_2) in transactions.items"
          :key="index_2"
        )
          md-icon settings_ethernet
          .md-list-item-text
            span {{ transaction.transactionId }}
            span {{ transaction.amount }} NOK
</template>

<script>
export default {
  name: 'Bank',
  data: () => ({
    expanded: false,
    transactions: []
  }),
  computed: {
    accounts () {
      return this.$store.getters['Bank/accounts']
    },
    initials () {
      const data = this.$store.getters['Customers/data']
      return data == null ? null : data.firstName.substr(0, 1) + data.lastName.substr(0, 1)
    }
  },
  methods: {
    fetchTransactions (accountNumber) {
      if (this.expanded)
        return

      this.$store.dispatch('Bank/transactions', accountNumber)
        .then(list => {
          this.transactions = list.items
        })
    },
    test () {
      alert("Fired")
    }
  }
}
</script>

<style lang="scss" scoped>
#bank {
  .transactions {

  }
}
</style>
