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
            <wallet-token-item :key="i" :token="token" />
          </template>
        </v-list>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
import WalletTokenItem from "@/components/Wallet/Bank/WalletTokenItem.vue";

export default {
  components: {
    WalletTokenItem
  },

  async created() {
    await this.getTokens();
  },

  computed: {
    address() {
      return this.$store.getters["wallet/address"];
    },
    wallets() {
      return this.$store.getters["wallet/wallets"];
    },
    tokens() {
      return this.$store.getters["wallet/coins"];
    }
  },

  methods: {
    async getTokens() {
      /*
        from getAccount response missing these props:
          * identity for token avatar
          * earns from allocation
          * currently allocated tokens
           
        {
          description: {
            identity: "stellar",
            description: "bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6"
          },
          balance: {
            amount: "8853057037",
            denom: "xlm"
          },
          available: null,
          allocated: 0,
          allocation_earn: 0
        }  
      */
    }
  }
};
</script>
