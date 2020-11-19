<template>
  <div>
    <h2 class="text-h2 mb-1">
      {{ title }}
    </h2>
    <v-sheet elevation="0" color="transparent">
      <v-slide-group center-active class="ml-n2">
        <v-slide-item v-for="(item, i) in items" :key="i">
          <track-grid-item
            :picture="item.picture"
            :name="item.name"
            :country="item.country"
            :city="item.city"
            :stream_url="item.stream_url"
            :isHls="item.stream_type === 'hls'"
          ></track-grid-item>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import TrackGridItem from "@/components/TrackGridItem";

export default {
  props: {
    title: {
      type: String,
      default: "Nuove uscite"
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    TrackGridItem
  }
};
</script>
