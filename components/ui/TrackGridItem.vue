<template>
  <v-card
    draggable
    flat
    tile
    class="ma-3 track-grid__item"
    :max-width="size"
    :width="$vuetify.breakpoint.mdAndUp ? '100%' : '290px'"
    color="transparent"
  >
    <v-img
      :src="cover"
      :height="size"
      width="auto"
      style="border-radius: 6px !important;"
      @click="onClick(cover, title, subtitle, source, isHls)"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-list-item class="px-0">
      <v-list-item-content>
        <v-list-item-title class="font-weight-medium">
          <router-link nuxt to="/playlist" class="track-grid__item_title">{{ title }}</router-link>
        </v-list-item-title>
        <v-list-item-subtitle class="text-wrap track-grid__item_subtitle" v-html="subtitle"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<style lang="css">
/* .track-grid__item_title {
  color: #ffffff !important;
  text-decoration: none;
  line-height: 1.5 !important;
} */
.track-grid__item_subtitle {
  line-height: 1.5 !important;
}
</style>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 225,
    },
    cover: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    source: {
      type: String,
      default: "",
    },
    isHls: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClick(cover, title, subtitle, source, isHls) {
      this.$store.commit(`player/setCurrentTrack`, {
        cover: cover,
        title: title,
        subtitle: subtitle,
        source: source,
        isHls: isHls,
      });
    },
  },
};
</script>
