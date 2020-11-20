<template>
  <player-container>
    <player-picture></player-picture>
    <player-title></player-title>
    <v-spacer></v-spacer>
    <player-actions></player-actions>
    <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
    <player-duration :currentTime="currentTime"></player-duration>
    <player-btn-stop></player-btn-stop>
    <player-error-dialog
      v-if="error"
      v-on:close="error = false"
    ></player-error-dialog>
  </player-container>
</template>

<script>
import { Howl } from "howler";
import { PLAYER_STATUS } from "@/lib/utils";

import PlayerContainer from "@/components/Player/Container";
import PlayerPicture from "@/components/Player/Picture";
import PlayerTitle from "@/components/Player/Title";
import PlayerActions from "@/components/Player/Actions";
import PlayerDuration from "@/components/Player/Duration";
import PlayerBtnStop from "@/components/Player/BtnStop";
import PlayerErrorDialog from "@/components/Player/ErrorDialog";

export default {
  name: "b-player",

  components: {
    PlayerContainer,
    PlayerPicture,
    PlayerTitle,
    PlayerActions,
    PlayerDuration,
    PlayerBtnStop,
    PlayerErrorDialog,
  },

  data() {
    return {
      audio: null,
      error: false,
      bufferTimer: null,
      currentTime: 0,
    };
  },

  watch: {
    currentTrack() {
      this.unloadAudio();

      if (this.currentTrack !== null) {
        console.log("----- new track -----", this.currentTrack);
        this.loadAudio();
      }
    },
    paused(val) {
      if (val) {
        clearInterval(this.bufferTimer);
        this.audio.pause();
      }
    },
    playing(val) {
      if (val) {
        this.audio.play();
        self = this;
        this.bufferTimer = setInterval(() => {
          if (self.audio !== null) {
            this.currentTime = self.audio.seek();
          } else {
            clearInterval(self.bufferTimer);
          }
        }, 100);
      }
    },
  },

  computed: {
    currentTrack() {
      return this.$store.getters["player/currentTrack"];
    },
    paused() {
      return this.$store.getters["player/paused"];
    },
    playing() {
      return this.$store.getters["player/playing"];
    },
  },

  methods: {
    loadAudio() {
      console.log("---- load new track ----");
      this.$store.commit("player/SET_STATUS", PLAYER_STATUS.LOADING);

      this.audio = new Howl({
        src: [this.currentTrack.source],
        html5: true,
        format: ["mp3", "aac", "flac"],
      });

      this.setupListeners();
    },
    unloadAudio() {
      console.log("---- unload track ----");
      clearInterval(this.bufferTimer);

      if (this.audio !== null) {
        this.$store.dispatch("player/stop");
        this.audio.stop();
        this.audio = null;
      }
    },
    setupListeners() {
      self = this;

      this.audio.once("load", function () {
        console.log("---- load completed ----");
        self.$store.dispatch("player/play");
      });

      this.audio.on("loaderror", function (id, err) {
        console.log("---- load error ----");
        self.error = true;
        self.currentTime = 0;
        self.$store.dispatch("player/destroy");
      });

      this.audio.on("playerror", function () {
        console.log("---- play error ----");
      });

      this.audio.on("play", function () {
        console.log("---- play start ----");
      });

      this.audio.on("end", function () {
        console.log("Finished!");
      });

      this.audio.on("pause", function () {
        console.log("---- pause ----");
      });

      this.audio.on("stop", function () {
        console.log("---- stop ----");
      });
    },
  },
};
</script>
