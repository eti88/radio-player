<template>
  <v-footer app class="pa-0">
    <v-card id="player">
      <player-progress-bar
        :currentTime="currentTime"
        :maxDuration="maxDuration"
      />
      <v-list-item class="px-4 py-2">
        <slot />
      </v-list-item>
    </v-card>
  </v-footer>
</template>

<script>
import PlayerProgressBar from "@/components/Player/ProgressBar";

export default {
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    maxDuration: {
      type: Number,
      default: 0
    }
  },
  components: {
    PlayerProgressBar
  }
};
</script>

<style lang="sass">
#player
  width: 100%
  .v-slider--horizontal
    margin-left: 0
    margin-right: 0

.v-slider--horizontal
  .v-slider__track-container
    height: 5px !important
    margin-left: 0px !important
    margin-right: 0px !important
    cursor: pointer

.v-slider__thumb
  z-index: 1
  cursor: pointer
</style>
