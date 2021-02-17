<template>
  <v-dialog
    :fullscreen="$vuetify.breakpoint.smAndDown"
    persistent
    max-width="800"
    :value="true"
  >
    <v-card>
      <v-card-text class="pa-5">
        <validator-detail
            :validator="value"
        />

        <validator-actions
            :validator="value"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('cancel')">Close</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
import ValidatorDetail from '@/components/Wallet/Staking/ValidatorDetail.vue'
import ValidatorActions from '@/components/Wallet/Staking/ValidatorActions.vue'

export default {
  components: {
    ValidatorDetail,
    ValidatorActions
  },
  
  props: {
    value: {
      type: Object,
      required: true
    }
  }

}
</script>
