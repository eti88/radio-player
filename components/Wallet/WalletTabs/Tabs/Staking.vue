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
      return this.$store.getters[`wallet/address`]
    }
  }

}
</script>
