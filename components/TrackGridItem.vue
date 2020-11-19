<template>
  <v-card
    draggable
    flat
    tile
    class="ma-3 track-grid__item"
    :max-width="size"
    :width="$vuetify.breakpoint.mdAndUp ? '225px' : '290px'"
    color="transparent"
  >
    <v-img
      :src="picture"
      :height="size"
      width="auto"
      style="border-radius: 6px !important;"
      @click="onClick(picture, name, `${city}, ${country}`, stream_url, isHls)"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <div class="pt-2 track-grid__item_title">
      <router-link nuxt to="/" class="font-weight-medium">{{
        name
      }}</router-link>
    </div>
    <div class="text-wrap track-grid__item_subtitle">
      <router-link nuxt :to="`/${country}/${city}`">{{ city }}</router-link
      >, <router-link nuxt :to="`/${country}`">{{ country }}</router-link>
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
  methods: {
    onClick(cover, title, subtitle, source, isHls) {
      this.$store.commit(`player/setCurrentTrack`, {
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
      return this.$vuetify.breakpoint.mdAndUp ? 225 : 140;
    }
  }
};
</script>
