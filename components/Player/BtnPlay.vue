<template>
  <div>
    <player-loading v-if="loading"></player-loading>
    <v-btn
      icon
      v-else
      @click="onBtnClick"
      :class="{
        'mx-3': $vuetify.breakpoint.mdAndUp,
        'mx-1': $vuetify.breakpoint.smAndDown,
      }"
    >
      <v-icon v-if="playing" size="40">mdi-pause</v-icon>
      <v-icon v-else size="40" :disabled="currentTrack === null">
        mdi-play
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import PlayerLoading from "@/components/Player/Loading";

export default {
  components: {
    PlayerLoading,
  },

  methods: {
    onBtnClick() {
      if (!this.playing) {
        this.onPlay();
      } else {
        this.onPause();
      }
    },
    onPlay() {
      console.log("--- play ---");
      this.$store.dispatch("player/play");
    },
    onPause() {
      console.log("--- pause ---");
      this.$store.dispatch("player/pause");
    },
  },

  computed: {
    loading() {
      return this.$store.getters["player/loading"];
    },
    currentTrack() {
      return this.$store.getters["player/currentTrack"];
    },
    playing() {
      return this.$store.getters["player/playing"];
    },
  },
};
</script>
