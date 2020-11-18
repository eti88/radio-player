<template>
  <v-footer app class="pa-0" v-show="this.currentTrack">
    <audio ref="audio"></audio>
    <v-card id="player">
      <v-slider
        class="mx-0 player-slider"
        v-model="currentTime"
        color="red accent-3"
        height="6"
        :step="1"
        :min="0"
        :max="duration"
        hide-details
        background-color="grey darken-3"
        @click.native="onSeek"
      />
      <v-list>
        <v-list-item>
          <!-- Init Cover -->
          <v-list-item-avatar tile>
            <v-avatar size="40px" tile v-if="this.currentTrack && this.currentTrack.cover !== ''">
              <img :src="this.currentTrack.cover" />
            </v-avatar>
            <v-icon v-else color="grey">mdi-disc</v-icon>
          </v-list-item-avatar>
          <!-- End Cover -->

          <!-- Init Title and description -->
          <v-list-item-content>
            <v-list-item-title>{{ this.currentTrack ? this.currentTrack.title : `` }}</v-list-item-title>
            <v-list-item-subtitle>{{ this.currentTrack ? this.currentTrack.subtitle : `` }}</v-list-item-subtitle>
          </v-list-item-content>
          <!-- End Title and description -->

          <v-spacer></v-spacer>

          <!-- Init Player actions -->
          <v-list-item-icon>
            <!-- init btn prev -->
            <v-btn icon class="mx-3" :disabled="true">
              <v-icon size="30">mdi-skip-previous</v-icon>
            </v-btn>
            <!-- end btn prev -->

            <!-- init loading -->
            <v-progress-circular
              v-if="loading"
              indeterminate
              color="red accent-3"
              :class="{
                'mx-3': $vuetify.breakpoint.mdAndUp,
                'mx-1': $vuetify.breakpoint.smAndDown
              }"
            />
            <!-- end loading -->
            <!-- init btn play/pause -->
            <v-btn
              v-else
              icon
              :class="{
                'mx-3': $vuetify.breakpoint.mdAndUp,
                'mx-1': $vuetify.breakpoint.smAndDown
              }"
            >
              <v-icon v-if="isPaused" size="40" @click="onPlay" :disabled="!canPlay">mdi-play</v-icon>
              <v-icon v-else size="40" @click="onPause">mdi-pause</v-icon>
            </v-btn>
            <!-- end btn play/pause -->

            <!-- init btn next -->
            <v-btn icon class="mx-3" :disabled="true">
              <v-icon size="30">mdi-skip-next</v-icon>
            </v-btn>
            <!-- end btn next -->
          </v-list-item-icon>
          <!-- End Player actions -->

          <v-spacer></v-spacer>

          <!-- init duration -->
          <v-list-item-content class="text-right">
            <v-list-item-subtitle class="caption">
              {{ toHHMMSS(currentTime) }} /
              {{ toHHMMSS(duration) }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <!-- end duration -->

          <!-- init btn fullScreen -->
          <v-list-item-icon>
            <v-btn icon class="mx-1">
              <v-icon v-if="!fullScreen" size="30">mdi-menu-up</v-icon>
              <v-icon v-else size="30">mdi-menu-down</v-icon>
            </v-btn>
          </v-list-item-icon>
          <!-- end btn fullScreen -->
        </v-list-item>
      </v-list>
    </v-card>
  </v-footer>
</template>

<script>
import Hls from "hls.js";
import HlsjsIpfsLoader from "@/lib/hls-ipfs";

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
    playing: {
      type: Boolean,
      default: false,
    },
    cover: {
      type: String,
      default:
        "https://lh3.googleusercontent.com/45RB3wqaBT-PZdYDwn-Whe75nl1ZFuRLKIKccNgN7SqbhcWxQg41BJGYoQSOKrp7k9catCquaj_cLhKn=w226-h226-l90-rj",
    },
    title: {
      type: String,
      default: "The Revolution",
    },
    description: {
      type: String,
      default: "dsadsad",
    },
  },
  data() {
    return {
      hls: null,
      slider: 30,
      bufferTimer: null,
      duration: 0,
      currentTime: 0,
      manifestParsed: false,
      isPaused: true,
    };
  },
  mounted() {
    const audio = this.$refs.audio;

    if (!Hls.isSupported()) throw new Error("Hls not supported!");

    // disable hlsjs ipfs loader, due to a lag on large files
    // Hls.DefaultConfig.loader = HlsjsIpfsLoader;
    Hls.DefaultConfig.debug = true;

    this.hls = new Hls();
    // disable hlsjs ipfs loader, due to a lag on large files
    // this.hls.config.ipfs = this.$db.getNode();
    this.hls.attachMedia(audio);

    this.hls.on(Hls.Events.MANIFEST_PARSED, (evt, data) => {
      this.manifestParsed = true;
      this.bufferData();
    });

    this.hls.on(Hls.Events.MEDIA_DETACHED, () => {
      this.manifestParsed = false;
      clearInterval(this.bufferTimer);
    });

    audio.addEventListener("resize", this.handleEvents);
    audio.addEventListener("seeking", this.handleEvents);
    audio.addEventListener("seeked", this.handleEvents);
    audio.addEventListener("pause", this.handleEvents);
    audio.addEventListener("play", this.handleEvents);
    audio.addEventListener("canplay", this.handleEvents);
    audio.addEventListener("canplaythrough", this.handleEvents);
    audio.addEventListener("ended", this.handleEvents);
    audio.addEventListener("playing", this.handleEvents);
    audio.addEventListener("error", this.handleEvents);
    audio.addEventListener("loadedmetadata", this.handleEvents);
    audio.addEventListener("loadeddata", this.handleEvents);
    audio.addEventListener("durationchange", this.handleEvents);
  },
  methods: {
    // TODO: move to utils/filters
    toHHMMSS(data) {
      if (Infinity === data) {
        return `00:00`;
      }

      var sec_num = parseInt(data, 10); // don't forget the second param
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      var seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (hours !== "00") return hours + ":" + minutes + ":" + seconds;
      return minutes + ":" + seconds;
    },
    bufferData() {
      this.bufferTimer = setInterval(() => {
        this.checkBuffer();
      }, 100);
    },
    checkBuffer() {
      this.duration = Math.round(this.$refs.audio.duration);
      this.currentTime = Math.round(this.$refs.audio.currentTime);
    },
    handleEvents(evt) {
      switch (evt.type) {
        case "play":
          this.isPaused = false;
          break;
        case "pause":
          this.isPaused = true;
          break;
        case "loadedmetadata":
          console.log("--- metadata loaded");
          this.bufferData();
          this.$refs.audio.play();
        case "error":
          if (evt.type === "error") {
            let errorTxt;
            let mediaError = evt.currentTarget.error;
            switch (mediaError.code) {
              case mediaError.MEDIA_ERR_ABORTED:
                errorTxt = "You aborted the audio playback";
                break;
              case mediaError.MEDIA_ERR_DECODE:
                errorTxt =
                  "The audio playback was aborted due to a corruption problem or because the audio used features your browser did not support";
                break;
              case mediaError.MEDIA_ERR_NETWORK:
                errorTxt =
                  "A network error caused the audio download to fail part-way";
                break;
              case mediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                errorTxt =
                  "The audio could not be loaded, either because the server or network failed or because the format is not supported";
                break;
            }
            console.error(errorTxt);
          }
      }
    },
    onSeek() {
      console.log("--- seek ---");
      this.$refs.audio.currentTime = Math.round(this.currentTime);
    },
    onPlay() {
      console.log("--- play ---");

      // if (this.currentTrack.isHls && !this.manifestParsed) {
      //   // disable hlsjs ipfs loader, due to a lag on large files
      //   // this.hls.config.ipfsHash = this.hash;
      //   this.hls.loadSource(this.currentTrack.source);
      // }

      this.$refs.audio.play();
    },
    onPause() {
      console.log("--- pause ---");
      this.$refs.audio.pause();
    },
    reload() {
      this.isPaused = true;
      this.hls.stopLoad();
      this.hls.detachMedia();

      console.log("ishls", this.currentTrack.isHls);

      if (this.currentTrack.isHls) {
        this.hls.attachMedia(this.$refs.audio);
        //this.hls.config.ipfsHash = this.hash;
        console.log(this.currentTrack.source);
        this.hls.loadSource(String(this.currentTrack.source));
      } else {
        console.log("--- add source to audio el ", this.currentTrack.source);
        this.$refs.audio.src = this.currentTrack.source;
      }

      this.onPlay();
    },
  },
  watch: {
    currentTrack() {
      console.log("------------------ new track");
      this.reload();
    },
  },
  computed: {
    canPlay() {
      return this.currentTrack !== null;
    },
    currentTrack() {
      return this.$store.getters[`player/currentTrack`];
    },
  },
};
</script>

<style>
#player {
  width: 100%;
}

.v-slider--horizontal .v-slider__track-container {
  height: 5px !important;
  margin-left: 0px !important;
  margin-right: 0px !important;
  cursor: pointer;
}

.v-slider__thumb {
  z-index: 1;
  cursor: pointer;
}
</style>
