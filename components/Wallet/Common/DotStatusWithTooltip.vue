<template>
  <v-tooltip
    :disabled="msg.length === 0"
    bottom
  >
    <template v-slot:activator="{ on }">
      <v-btn
        :ripple="false"
        class="no-background-hover"
        text
        small
        icon
        v-on="on"
      >
        <span :class="status ? 'green lighten-1' : 'red lighten-1'" class="dot"></span>
      </v-btn>
    </template>

    <span>{{ msg }}</span>

  </v-tooltip>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      required: true
    },
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .dot {
    width: 8px;
    height: 8px;
    min-width: 8px;
    min-height: 8px;
    border-radius: 50%;
  }
  .no-background-hover::before {
    background-color: transparent !important;
  }
</style>
