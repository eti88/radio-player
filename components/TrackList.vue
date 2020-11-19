<template>
  <v-list color="transparent">
    <template v-for="(item, i) in items">
      <track-list-item-desktop
        :key="item._id"
        :item="item"
        v-if="$vuetify.breakpoint.mdAndUp"
      ></track-list-item-desktop>
      <track-list-item-mobile
        v-else
        :key="item._id"
        :item="item"
      ></track-list-item-mobile>
      <v-divider :key="i" v-if="i < items.length - 1"></v-divider>
    </template>
  </v-list>
</template>

<script>
import TrackListItemDesktop from "@/components/TrackListItemDesktop";
import TrackListItemMobile from "@/components/TrackListItemMobile";

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
    TrackListItemDesktop,
    TrackListItemMobile
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
