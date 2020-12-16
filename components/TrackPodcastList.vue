<template>
  <v-list color="transparent">
    <template v-for="(item, i) in items">
      <track-podcast-list-item-desktop
        :key="item.id"
        :item="item"
        v-if="$vuetify.breakpoint.mdAndUp"
      ></track-podcast-list-item-desktop>
      <v-divider :key="i" v-if="i < items.length - 1"></v-divider>
    </template>
  </v-list>
</template>

<script>
import TrackPodcastListItemDesktop from "@/components/TrackPodcastListItemDesktop";

export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  components: {
    TrackPodcastListItemDesktop
  }
};
</script>

<style lang="sass">
.track-list__item_link
  color: #9e9e9e !important
  text-decoration: none
  line-height: 1.5 !important
  margin-right: 4px
</style>
