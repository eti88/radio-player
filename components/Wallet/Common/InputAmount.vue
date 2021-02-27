<template>
  <ValidationProvider
    v-slot="{ errors }"
    rules="required|decimals:6"
    name="amount"
    tag="div"
    class="mt-0 pt-0"
  >
    <v-text-field
      v-model="lazyValue"
      autocomplete="off"
      placeholder="Amount"
      :hint="balanceText"
      type="number"
      :suffix="`${coin ? convertMicroDenom(coin) : ``}`"
      data-vv-name="amount"
      :error-messages="errors[0]"
      @change="$emit('update:amount', lazyValue)"
      @keyup="$emit('update:amount', lazyValue)"
    ></v-text-field>
  </ValidationProvider>
</template>

<script>
import { convertMicroToMacroAmount, convertMicroDenom } from "@/lib/utils";

export default {
  props: {
    value: null,
    coin: String
  },

  data() {
    return {
      lazyValue: this.value
      //balance: []
    };
  },

  async created() {
    // let account = await this.$client.getAccount(this.address)
    // account = account.result.result
    // if (account.value && account.value.coins) {
    //   this.balance = account.value.coins.map(c => {
    //     return {
    //       ...c,
    //       text: convertMicroDenom(c.denom)
    //     }
    //   })
    // }
  },

  watch: {
    value(val) {
      this.lazyValue = val;
    }
  },

  methods: {
    convertMicroDenom(denom) {
      return convertMicroDenom(denom);
    }
  },

  computed: {
    address() {
      return this.$store.getters[`wallet/address`];
    },
    balance() {
      return this.$store.getters["bank/coins"].map(c => {
        return {
          ...c,
          text: convertMicroDenom(c.denom)
        };
      });
    },
    micro_stake_denom() {
      return this.$store.getters["app/micro_stake_denom"];
    },
    stake_denom() {
      return this.$store.getters["app/stake_denom"];
    },
    decimals() {
      return this.$store.getters["app/decimals"];
    },
    balanceText() {
      if (this.balance.length === 0) return `Max: 0 ${this.stake_denom}`;
      if (this.coin === undefined || this.coin === null)
        return `Max: 0 ${this.stake_denom}`;

      let coin;
      if (this.lazyValue === null) {
        coin = this.balance.find(
          c => c.text.toUpperCase() === this.stake_denom.toUpperCase()
        );
        if (coin === undefined) return `Max: 0 ${this.stake_denom}`;
        return `Max: ${convertMicroToMacroAmount(coin.amount, this.decimals)} ${
          this.stake_denom
        }`;
      }

      coin = this.balance.find(c => {
        return c.denom.toUpperCase() === this.coin.toUpperCase();
      });

      if (coin === undefined) return `Max: 0 ${this.coin}`;
      return `Max: ${convertMicroToMacroAmount(
        coin.amount,
        this.decimals
      )}${convertMicroDenom(coin.denom)}`;
    }
  }
};
</script>
