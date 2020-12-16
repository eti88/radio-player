<template>
  <v-slider
    class="mx-0 player-slider"
    color="red accent-3"
    height="6"
    readonly
    :step="1"
    :min="0"
    :max="maxDuration"
    :value="getCurrentTime"
    hide-details
    background-color="grey darken-3"
    @click.native="onSeek"
  />
</template>

<script>
export default {
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    maxDuration: {
      type: Number,
      default: 100
    }
  },
  computed: {
    getCurrentTime() {
      return this.maxDuration > 0 ? this.currentTime : 100;
    }
  }
};
</script>
