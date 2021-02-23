<template>
  <v-flex>
    <staked-tokens />
    <available-validators />
  </v-flex>
</template>

<script>
import StakedTokens from '@/components/Wallet/Staking/StakedTokens.vue'
import AvailableValidators from '@/components/Wallet/Staking/AvailableValidators.vue'

export default {
  components: {
    StakedTokens,
    AvailableValidators
  },

  computed: {
    address() {
      return 'bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6'
      // TODO: replace
      // return this.$store.getters[`wallet/address`]
    }
  }

}
</script>
