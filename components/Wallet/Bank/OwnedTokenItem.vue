<template>
  <v-list-item class="mb-3 mx-0 px-0">
    <v-card class="w-full">
      <v-card-subtitle>
        <h6 class="body-2 font-weight-bold text-uppercase">{{ token.description.identity }}</h6>
      </v-card-subtitle>
      <v-card-text>
        <v-flex>
          <v-row>
            <v-col cols="1" align="center" justify="center">
              <validator-avatar
                :identity="token.description.identity"
                :valoper="token.description.operator_address"
                size="40px"
              />
            </v-col>
            <v-col cols="4" class="element-card flex-col-start">
              <amount
                v-if="token.balance !== null"
                style="font-size: 1.3em;"
                class="my-auto"
                :micro-amount="this.token.balance.amount"
                :denom="token.balance.denom"
              />
              <div v-if="token.available !== null && token.available.balance !== null">
                <amount
                  v-if="token.available.balance !== null"
                  style="font-size: 0.9em"
                  class="grey--text text--darken-1 caption"
                  :micro-amount="token.available.balance.amount"
                  :denom="token.available.balance.denom"
                />
                <span style="font-size: 0.9em" class="grey--text text--darken-1 caption">available</span>
              </div>
            </v-col>
            <v-col cols="4" align="start" class="justify-start flex-column">
              <amount
                style="font-size: 1.3em"
                :micro-amount="price"
                denom="USD"
              />
              <div>
                <amount
                  v-if="token.balance !== null"
                  :micro-amount="allocationMoneyValue"
                  :deciamlsNumber="2"
                  style="font-size: 0.9em"
                  class="grey--text text--darken-1 caption"
                  denom="USD"
                />
              </div>
            </v-col>
            <v-col cols="3" align="start" justify="start" class="flex-col-start">
              <v-progress-linear
                color="green"
                height="6"
                class="my-auto bar-rounded mb-1"
                :value="percentage"
              />
              <div class="text-center">
                {{ percentage }}%
              </div>
            </v-col>
          </v-row>
        </v-flex>
      </v-card-text>
    </v-card>
  </v-list-item>
</template>

<script>
import ValidatorAvatar from '@/components/Wallet/Common/AvatarToken.vue'
import Amount from "@/components/Wallet/Common/Amount.vue"
import { pergentageOf, convertMacroToMicroAmount, convertMicroToMacroAmount } from '@/lib/utils'

/*
    TODO: After changin coingeko api call, we can retrive all price of token with single call
    (parent component)
    TODO: Fix Price display value
*/

export default {
  components: {
    ValidatorAvatar,
    Amount
  },

  props: {
    token: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      price: 0
    }
  },

  computed: {
    decimals() {
      return this.$store.getters['app/decimals']
    },
    percentage () {
      return pergentageOf(this.token.allocated, this.token.balance.amount)
    },
    allocationMoneyValue () {
      // TODO: Check if conversion is right with real values
      const total = parseInt(this.token.allocation_earn)* convertMicroToMacroAmount(this.price, this.decimals - 2)
      return convertMicroToMacroAmount(total, this.decimals - 2)
    }
  },

  async created () {
    await this.getCounterValue()
  },

  methods: {
    async getCounterValue () {
      const response = await this.$api.getTokenUsdPrice(this.token.description.identity, 'usd')
      if (response !== null) {
        try {
          // Access pragmatically token name from geko api response
          this.price = convertMacroToMicroAmount(response[this.token.description.identity].usd, this.decimals)
        } catch (e) {
          console.log(`Cannot fetch price of this token: ${this.token.description.identity}`)
        }
      }
    }
  }
}
</script>

<style>
  .w-full {
    width: 100%;
  }
  .element-card {
    display: flex;
    align-items: center !important;
  }
  .flex-col-start {
    flex-flow: column;
    align-items: flex-start !important;
  }
  .bar-rounded {
    border-radius: 5px;
  }
</style>