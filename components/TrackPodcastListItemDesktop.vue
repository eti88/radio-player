<template>
  <v-list-item>
    <track-img
      :size="32"
      :size-btn="25"
      :picture="item.picture"
      :streamUrl="item.stream_url"
      class="mr-4"
      v-if="item.picture"
      v-on:select="onClick(item)"
    ></track-img>

    <v-list-item-title
      class="font-weight-medium"
      v-html="item.title"
      @click="onClick(item)"
      style="max-width:340px"
    >
    </v-list-item-title>
    <v-list-item-title class="ml-4 grey--text" style="max-width:800px">
      {{ item.subtitle | stripHtml }}
    </v-list-item-title>
    <v-spacer></v-spacer>
    <v-list-item-title
      class="grey--text text-right mr-4"
      v-html="toHHMMSS(item.duration)"
      style="max-width:70px"
    >
    </v-list-item-title>
    <v-list-item-action class="text-right">
      <v-btn icon>
        <v-icon color="grey">mdi-heart-outline</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-action class="text-right">
      <v-btn icon color="grey">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import TrackImg from "@/components/TrackImg";
import { toHHMMSS } from "@/lib/utils";

export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  components: {
    TrackImg
  },

  methods: {
    toHHMMSS(val) {
      return toHHMMSS(val);
    },
    onClick(item) {
      const track = {
        ...item,
        type: "podcast"
      };
      this.$store.dispatch(`player/setCurrentTrack`, track);
    },
    onFavorite(item) {
      if (!this.isFavorite(item)) {
        this.$store.dispatch(`favorites/addRadio`, item);
      } else {
        this.$store.dispatch(`favorites/removeRadio`, item);
      }
    },
    isFavorite(item) {
      return this.$store.getters["favorites/radios"].find(
        r => r.stream_url === item.stream_url
      )
        ? true
        : false;
    }
  }
};
</script>
