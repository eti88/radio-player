<template>
  <v-dialog persistent max-width="400" :value="true">
    <v-card>
      <v-card-title>Stream error</v-card-title>
      <div class="subtitle-1 mx-6 mb-2">
        Sorry, this stream is not supported by this device. We are working to
        make this stream compatible with your device as well.
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text depressed @click="close"
          >Ok, I understand.</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
