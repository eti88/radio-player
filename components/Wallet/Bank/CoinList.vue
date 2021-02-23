<template>
  <v-flex class="px-0 mx-0 black">
    <v-row no-gutters>
      <v-col cols="12">
        <v-list color="transparent" v-if="coins">
          <template v-for="(coin, i) in coins">
            <coin-list-item :key="i" :coin="coin" />
          </template>
        </v-list>
        <div v-else class="text-center font-weight-bold">
          No balance
        </div>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
import CoinListItem from "@/components/Wallet/Bank/CoinListItem";

export default {
  components: {
    CoinListItem
  },

  data() {
    return {
      loading: false,
      coins: []
    };
  },

  async created() {
    await this.getCoins();
  },

  computed: {
    address() {
      return this.$store.getters["wallet/address"];
    }
  },

  methods: {
    async getCoins() {
      let account = await this.$btsg.getAccount(this.address);
      this.coins = account.value.coins;
      // // TODO: Placeholder
      // this.tokens = [
      //   {
      //     description: {
      //       identity: "stellar",
      //       description: "bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6"
      //     },
      //     balance: {
      //       amount: "8853057037",
      //       denom: "xlm"
      //     },
      //     available: null,
      //     allocated: 0,
      //     allocation_earn: 0
      //   },
      //   {
      //     description: {
      //       identity: "ripple",
      //       description: "bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6"
      //     },
      //     balance: {
      //       amount: "11530580370",
      //       denom: "xrp"
      //     },
      //     available: {
      //       balance: {
      //         amount: "11530570370",
      //         denom: "xrp"
      //       }
      //     },
      //     allocated: "11110100000000",
      //     allocation_earn: "10000000"
      //   }
      // ];
    }
  }
};
</script>
