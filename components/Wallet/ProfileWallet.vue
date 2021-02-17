<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="12" class="py-0">
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="12" md="8">
                <div class="d-flex flex-row">
                  <h6 class="text-h6 mb-1">Your address</h6>
                  <v-btn
                    target="_blank"
                    title="Bitsong explorer"
                    :href="`${explorerUrl}/account/${this.address}`"
                    class="ml-2"
                    small
                    icon
                  >
                    <v-icon>mdi-feature-search-outline</v-icon>
                  </v-btn>
                </div>
                <v-container class="pa-0">
                  <v-row>
                    <v-col cols="10" class="py-0">
                      <markup :content="address"></markup>
                    </v-col>
                    <v-col cols="2" class="pt-0">
                      <v-flex class="d-flex flex-row flex-md-column">
                        <v-btn icon @click.stop="showAddress = true">
                          <v-icon>mdi-qrcode-scan</v-icon>
                        </v-btn>
                        <v-btn
                          title="Send token"
                          icon
                          @click.stop="onOpenSend"
                        >
                          <v-icon>mdi-send</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-col>
                  </v-row>
                </v-container>
                <bank-receive-dialog
                  v-if="showAddress"
                  v-on:close="onCloseAddress"
                />
              </v-col>
              <v-col cols="12" md="4">
                <h6 class="text-h6">Your balance</h6>
                <amount
                  v-if="balance !== null"
                  style="font-size: 1.7em"
                  :micro-amount="balance.amount"
                  :denom="balance.denom"
                />
                <div>
                  <span class="grey--text text--darken-1 caption">≈</span>
                  <amount
                    v-if="balance !== null"
                    :micro-amount="currency"
                    :deciamlsNumber="2"
                    style="font-size: 0.9em"
                    class="grey--text text--darken-1 caption"
                    denom="USD"
                  />
                </div>
              </v-col>
            </v-row>
            <send-token-dialog
              v-if="showModal"
              v-on:cancel="onCloseSend"
            />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Markup from "@/components/Wallet/Common/Markup.vue"
import Amount from "@/components/Wallet/Common/Amount.vue"
import BankReceiveDialog from '@/components/Wallet/Dialogs/ReceiveDialog'
import SendTokenDialog from '@/components/Wallet/Dialogs/SendTokenDialog.vue'
import { convertMicroToMacroAmount } from '@/lib/utils'

export default {
  components: {
    Markup,
    Amount,
    BankReceiveDialog,
    SendTokenDialog
  },

  data () {
    return {
      loading: false,
      balance: null,
      currency: 0,
      showAddress: false,
      showModal: false
    }
  },

  async created () {
    await this.getAccount()
    await this.getCounterValue()
  },

  computed: {
    address () {
      return 'bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6'
      // TODO: replace
      // return this.$store.getters['wallet/address']
    },
    explorerUrl () {
      return process.env.URL_ACCOUNT_EXPLORER
    },
    decimals () {
      return this.$store.getters["app/decimals"];
    }
  },

  methods: {
    async getAccount () {
      try {
        this.loading = true
        /*
         * TODO: Disabled for mochup (missing .env parameters)
        let account = await this.client.getAccount(this.address)
        account = account.result.result
        */
        const account = {
          value: {
            coins: [
              {
                denom: 'ubtsg',
                amount: "100000000"
              }
            ]
          }
        }

        if (account.value != null && account.value.coins.length === 0) {
          this.balance = {
            amount: 0,
            denom: process.env.MICROSTAKEDENOM
          }
        }

        if (account.value !== null && account.value.coins.length  > 0) {
          const coin = account.value.coins.find(
            c => c.denom === process.env.MICROSTAKEDENOM
          )
          if (coin !== undefined) {
            this.balance = {
              amount: coin.amount,
              denom: process.env.MICROSTAKEDENOM
            }
          }
        }

      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },
    async getCounterValue () {
      const response = await this.$api.getTokenUsdPrice('bitsong', 'usd')
      if (response !== null) {
        const value = response.bitsong.usd * this.balance.amount
        this.currency = convertMicroToMacroAmount(value, this.decimals - 2)
      }
    },
    onOpenSend () {
      this.showModal = true
    },
    onCloseSend () {
      this.showModal = false
    },
    onCloseAddress () {
      this.showAddress = false
    }
  }

}
</script>

<style lang="sass" scoped>
.address
  border-radius: 4px
  color: #f8c555
  padding: 4px
  font-weight: bold
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace
  font-size: 1rem
  text-align: left
  line-height: 1.5
  word-spacing: normal
  word-break: normal
  word-wrap: break-word
  tab-size: 4
  hyphens: none
</style>
