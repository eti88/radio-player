<template>
  <v-dialog
    :fullscreen="$vuetify.breakpoint.smAndDown"
    persistent
    max-width="800"
    :value="true"
  >
    <v-card>      
      <v-card-text>
        <v-sheet height="100%">
            <v-container class="fill-height">
              <v-row>
                <v-col cols="12">
                  <bank-send
                    v-on:cancel="onClose"
                  />
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
import BankSend from '@/components/Wallet/Bank/Send'

export default {
  
  components: {
    BankSend
  },
  
  methods: {
    onClose () {
      this.$emit('cancel')
    }
  }
}
</script>
