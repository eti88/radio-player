<template>
  <v-card
    flat
    tile
    class="ma-3 track-grid__item"
    :max-width="size"
    :width="$vuetify.breakpoint.mdAndUp ? '225px' : '290px'"
    color="transparent"
  >
    <track-img
      :picture="picture"
      :streamUrl="stream_url"
      v-on:select="
        onClick(picture, name, `${city}, ${country}`, stream_url, isHls)
      "
    ></track-img>

    <div class="pt-2 track-grid__item_title">
      <router-link nuxt to="/" class="font-weight-medium">{{
        name
      }}</router-link>
    </div>
    <div class="text-wrap track-grid__item_subtitle">
      {{ city }},
      <router-link nuxt :to="`/radio/${country}`">{{ country }}</router-link>
    </div>
  </v-card>
</template>

<style lang="sass">
.track-grid__item a:hover
  text-decoration: underline !important

.theme--light
  .track-grid__item_title a
    color: #000 !important

.theme--dark
  .track-grid__item_title a
    color: #fff !important
  .track-grid__item_subtitle a
    color: rgba(255, 255, 255, 0.7)

.track-grid__item_subtitle
  line-height: 1.5 !important
  font-size: 0.875rem
  color: rgba(255, 255, 255, 0.7)
</style>

<script>
import PlayerBtnPlay from "@/components/Player/BtnPlay";
import TrackImg from "@/components/TrackImg";

export default {
  props: {
    picture: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    },
    stream_url: {
      type: String,
      default: ""
    },
    isHls: {
      type: Boolean,
      default: true
    }
  },

  components: {
    PlayerBtnPlay,
    TrackImg
  },

  methods: {
    onClick(cover, title, subtitle, source, isHls) {
      this.$store.commit(`player/SET_CURRENT_TRACK`, {
        cover: cover,
        title: title,
        subtitle: subtitle,
        source: source,
        isHls: isHls
      });
    }
  },
  computed: {
    size() {
      return this.$vuetify.breakpoint.mdAndUp ? 205 : 130;
    },
    currentTrack() {
      return this.$store.getters["player/currentTrack"];
    },
    isPlaying() {
      return this.$store.getters["player/playing"];
    },
    isLoading() {
      return this.$store.getters["player/loading"];
    }
  }
};
</script>
