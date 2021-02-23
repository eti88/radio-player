<template>
  <card-msg
    title="Edit Validator"
    subtitle="Edit an existing validator account."
    :loading="loading"
    :memo="form.memo"
    :gas_price="form.gas_price"
    :gas_limit="form.gas_limit"
    v-on:update:memo="form.memo = $event"
    v-on:update:gas_price="form.gas_price = $event"
    v-on:update:gas_limit="form.gas_limit = $event"
  >
    <template v-slot:fields>
      <input-validator
        class="col-12 col-md-6"
        v-model="form.validator"
        v-on:update:validator="onValidatorSelected"
      ></input-validator>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required|decimals:18"
        name="commission"
        tag="div"
        class="col-12 col-md-3 mt-0 pt-0"
      >
        <v-text-field
          v-model="form.commission"
          :disabled="!form.validator"
          autocomplete="off"
          label="Commission"
          hint="eg: 0.10 (10%), 0.55 (55%), 1 (100%)"
          type="number"
          data-vv-name="commission"
          :error-messages="errors[0]"
        ></v-text-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required|integer"
        name="min_self_delegation"
        tag="div"
        class="col-12 col-md-3 mt-0 pt-0"
      >
        <v-text-field
          v-model="form.min_self_delegation"
          :disabled="!form.validator"
          autocomplete="off"
          label="Min. self delegation"
          hint="eg: 1"
          type="number"
          data-vv-name="min_self_delegation"
          :error-messages="errors[0]"
        ></v-text-field>
      </ValidationProvider>

      <v-card-title class="pt-0 col-12">
        Description
      </v-card-title>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required|max:100"
        name="moniker"
        tag="div"
        class="col-12 col-md-6"
      >
        <v-text-field
          v-model="form.moniker"
          :disabled="!form.validator"
          autocomplete="off"
          label="Moniker"
          hint="eg: StakeBit"
          data-vv-name="moniker"
          :error-messages="errors[0]"
        ></v-text-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required|max:100"
        name="identity"
        tag="div"
        class="col-12 col-md-6"
      >
        <v-text-field
          v-model="form.identity"
          :disabled="!form.validator"
          autocomplete="off"
          label="Identity"
          hint="eg: FA8C5AD2A308E426 (Keybase identity)"
          data-vv-name="identity"
          :error-messages="errors[0]"
        ></v-text-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required|max:150"
        name="website"
        tag="div"
        class="col-12 col-md-6"
      >
        <v-text-field
          v-model="form.website"
          :disabled="!form.validator"
          autocomplete="off"
          label="Website"
          hint="eg: https://stakebit.btsg"
          data-vv-name="website"
          :error-messages="errors[0]"
        ></v-text-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required|max:100"
        name="security_contact"
        tag="div"
        class="col-12 col-md-6"
      >
        <v-text-field
          v-model="form.security_contact"
          :disabled="!form.validator"
          autocomplete="off"
          label="Security Contact"
          hint="eg: security@stakebit.btsg"
          data-vv-name="security_contact"
          :error-messages="errors[0]"
        ></v-text-field>
      </ValidationProvider>

      <v-textarea
        class="col-12"
        v-model="form.description"
        :disabled="!form.validator"
        label="Validator description"
        counter="300"
      ></v-textarea>
    </template>

    <template v-slot:actions>
      <v-btn :disabled="isDisabled" color="primary" @click.stop="onSend">
        Send
      </v-btn>
    </template>

    <template v-slot:dialog>
      <staking-edit-validator-confirmation
        v-if="showModal"
        :validator="form.validator"
        :commission="form.commission"
        :min_self_delegation="form.min_self_delegation"
        :moniker="form.moniker"
        :identity="form.identity"
        :website="form.website"
        :security_contact="form.security_contact"
        :description="form.description"
        :memo="form.memo"
        :gas_price="form.gas_price"
        :gas_limit="form.gas_limit"
        :loading="loadingModal"
        :response="response"
        v-on:cancel="onCancel"
        v-on:confirm="onConfirm"
      ></staking-edit-validator-confirmation>
    </template>
  </card-msg>
</template>

<script>
import { parseErrorResponse } from '@/lib/utils'
import StakingEditValidatorConfirmation from '@/components/Wallet/Staking/EditValidatorConfirmation'

import InputAddress from '@/components/Wallet/Common/InputAddress'

export default {
  props: {
    value: String
  },

  components: {
    StakingEditValidatorConfirmation,
    InputAddress
  },

  data: () => ({
    loading: false,
    loadingModal: false,
    showModal: false,
    validator: null,
    form: {
      validator: null,
      commission: null,
      min_self_delegation: null,
      moniker: null,
      identity: null,
      website: null,
      security_contact: null,
      description: null,
      memo: '',
      gas_price: 0,
      gas_limit: 0
    },
    response: {
      success: false,
      log: null,
      tx_hash: null
    }
  }),

  created() {
    this.form.gas_price = this.$store.getters['app/gas_price']
    this.form.gas_limit = this.$store.getters['app/gas_limit']
  },

  watch: {
    value(val) {
      this.form.validator = val
    }
  },

  computed: {
    isDisabled() {
      return this.form.validator === null
    },
    address() {
      return this.$store.getters[`wallet/address`]
    }
  },
  methods: {
    onSend() {
      this.showModal = true
    },
    onCancel() {
      this.showModal = false
      this.resetResponse()
    },
    resetResponse() {
      this.response = {
        success: false,
        log: null,
        tx_hash: null
      }
    },
    async onValidatorSelected(evt) {
      this.loading = true

      const val = await this.$btsg.getValidator(evt)
      this.validator = val.result

      this.form.validator = this.validator.operator_address
      this.form.commission = this.validator.commission.commission_rates.rate
      this.form.min_self_delegation = this.validator.min_self_delegation
      this.form.moniker = this.validator.description.moniker
      this.form.identity = this.validator.description.identity
      this.form.website = this.validator.description.website
      this.form.security_contact = this.validator.description.security_contact
      this.form.description = this.validator.description.details

      this.loading = false
    },
    async onConfirm() {
      this.resetResponse()
      this.loadingModal = true

      try {
        const payload = {
          description: {
            moniker: this.form.moniker,
            identity: this.form.identity,
            website: this.form.website,
            security_contact: this.form.security_contact,
            details: this.form.description
          },
          address: this.form.validator,
          commission_rate: this.form.commission,
          min_self_delegation: this.form.min_self_delegation !== this.validator.min_self_delegation ? this.form.min_self_delegation : null
        }

        const response = await this.$bitsong.editValidator(
          payload,
          this.address,
          this.form.memo,
          this.$store.getters['wallet/privateKey'],
          this.form.gas_price,
          this.form.gas_limit
        )

        this.response = parseErrorResponse(response)

        this.$emit('txSuccess')
      } catch (e) {
        this.response.log = e.message
      }

      this.loadingModal = false
    }
  }
}
</script>
