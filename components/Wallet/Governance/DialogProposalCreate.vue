<template>
  <v-dialog
    :fullscreen="$vuetify.breakpoint.smAndDown"
    persistent
    max-width="800"
    :value="true"
  >
    <v-card flat>
      <v-card-text>
        <!--
            TODO: Wait to discuss
        -->
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('cancel')">Close</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
</script>
