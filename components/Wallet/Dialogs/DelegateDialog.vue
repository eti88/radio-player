<template>
  <v-dialog
    :fullscreen="$vuetify.breakpoint.smAndDown"
    persistent
    max-width="800"
    :value="true"
  >
    <v-card>
      <v-card-text>
        <staking-delegations
          class="mb-8"
          :loading="loading"
          :delegations="delegations"
          v-on:delegate="onDelegate"
          v-on:unbond="onUnbond"
        />
        <staking-delegate
          id="delegate"
          v-model="delegate"
          v-on:txSuccess="getDelegations"
        ></staking-delegate>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('cancel')">Close</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
import StakingDelegations from '@/components/Wallet/Staking/Delegations'
import StakingDelegate from '@/components/Wallet/Staking/Delegate'

export default {
  components: {
    StakingDelegate,
    StakingDelegations
  },

  computed: {
    address() {
      return 'bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6'
      // TODO: replace
      // return this.$store.getters[`wallet/address`]
    }
  },

  data() {
    return {
      loading: false,
      delegate: null,
      unbond: null,
      delegations: []
    }
  },

  async created () {
    await this.getDelegations()
  },

  methods: {
    onDelegate(valoper) {
      this.delegate = valoper
      this.unbond = null
      this.$vuetify.goTo('#delegate', {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    },
    onUnbond(valoper) {
      this.delegate = null
      this.unbond = valoper
      this.$vuetify.goTo('#unbond', {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    },
    async getDelegations() {
      try {
        this.loading = true
        const validators = await this.$btsg.getValidators()
        const delegations = await this.$btsg.getDelegations(this.address)

        this.delegations = delegations
          .sort((a, b) => {
            return b.shares - a.shares
          })
          .map(d => {
            const val = validators.result.find(
              v => v.operator_address === d.validator_address
            )
            return {
              ...d,
              validator_name: val !== undefined ? val.description.moniker : '',
              identity: val !== undefined ? val.description.identity : ''
            }
          })

        this.loading = false
      } catch (e) {
        console.error(e)
      }
    }
  }

}
</script>
