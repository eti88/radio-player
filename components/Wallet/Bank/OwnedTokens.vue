<template>
  <v-flex class="px-0 mx-0 black">
    <v-card elevation="0">
      <v-row class="py-0 my-0">
        <v-col cols="1" />
        <v-col cols="4">
          <span class="caption">Amount</span>
        </v-col>
        <v-col cols="4">
          <span class="caption">Price</span>
        </v-col>
        <v-col cols="3">
          <span class="caption">Allocation</span>
        </v-col>
      </v-row>
    </v-card>
    <v-row no-gutters>
      <v-col cols="12">
        <v-list color="transparent">
         <template v-for="(token, i) in tokens">
          <owned-token-item :key="i" :token="token" />
        </template>
      </v-list>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
import OwnedTokenItem from '@/components/Wallet/Bank/OwnedTokenItem.vue'

export default {

    components: {
      OwnedTokenItem
    },

    data () {
      return {
        loading: false,
        tokens: []
      }
    },

    async created () {
      await this.getTokens(this.address)
    },

    computed: {
      address () {
        return 'bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6'
        // TODO: replace
        // return this.$store.getters['wallet/address']
      }
    },

    methods: {
      async getTokens (address) {
        // TODO: Placeholder
        this.tokens = [
          {
            description: {
              identity: 'stellar',
              description: 'bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6'
            },
            balance: {
              amount: '8853057037',
              denom: 'xlm'
            },
            available: null,
            allocated: 0,
            allocation_earn: 0
          },
          {
            description: {
              identity: 'ripple',
              description: 'bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6'
            },
            balance: {
              amount: '11530580370',
              denom: 'xrp'
            },
            available: {
              balance: {
                amount: '11530570370',
                denom: 'xrp'
              }
            },
            allocated: '11110100000000',
            allocation_earn: '10000000'
          }
        ]
      }
    }

}
</script>
