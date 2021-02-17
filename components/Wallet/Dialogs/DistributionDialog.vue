<template>
  <v-dialog
    :fullscreen="$vuetify.breakpoint.smAndDown"
    persistent
    max-width="800"
    :value="true"
  >
    <v-card>
      <v-card-title>
        Rewards
      </v-card-title>
      
      <v-card-text>
        <v-sheet height="100%">
            <v-container class="fill-height">
              <v-row>
                <v-col cols="12">
                  <distribution-rewards :loading="loading" :rewards="rewards" v-on:withdraw="onWithdraw" class="mb-8" />

                  <distribution-withdraw
                    id="withdraw"
                    class="mb-8"
                    v-model="withdraw"
                    v-on:txSuccess="getRewards"
                  ></distribution-withdraw>
                </v-col>
              </v-row>
            </v-container>
        </v-sheet>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('cancel')">Close</v-btn>
      </v-card-actions>

    </v-card>

  </v-dialog>
</template>

<script>
import DistributionRewards from '@/components/Wallet/Distribution/Rewards'
import DistributionWithdraw from '@/components/Wallet/Distribution/Withdraw'

export default {
  components: {
      DistributionRewards,
      DistributionWithdraw
  },

  data() {
    return {
      loading: false,
      withdraw: null,
      rewards: []
    }
  },

  computed: {
    address() {
      return 'bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6'
      // TODO: replace
      // return this.$store.getters[`wallet/address`]
    }
  },

  created() {
    this.getRewards()
  },

  methods: {
    async getRewards() {
      try {
        this.loading = true
        const validators = await this.$btsg.getValidators()
        const rewards = await this.$btsg.getDelegatorRewards(this.address)

        this.rewards = rewards.rewards
          .map(r => {
            const val = validators.result.find(
              v => v.operator_address === r.validator_address
            )
            return {
              ...r,
              validator_name: val !== undefined ? val.description.moniker : '',
              identity: val !== undefined ? val.description.identity : '',
              amt: r.reward === null ? 0 : r.reward[0].amount
            }
          })
          .sort((a, b) => {
            return b.amt - a.amt
          })

        this.loading = false
      } catch (e) {
        console.error(e)
      }
    },
    onWithdraw(valoper) {
      this.withdraw = valoper
      this.$vuetify.goTo('#withdraw', {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    }
  }

}
</script>
