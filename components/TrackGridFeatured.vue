<template>
  <div>
    <div class="d-flex">
      <h2 class="text-h2 mb-1">
        <slot name="title" />
        <slot name="action" v-if="$vuetify.breakpoint.mdAndUp" />
      </h2>
      <v-spacer></v-spacer>
      <div class="mt-3">
        <slot name="action" v-if="$vuetify.breakpoint.smAndDown" />
      </div>
    </div>
    <v-sheet elevation="0" color="transparent">
      <v-slide-group center-active class="ml-n2">
        <v-slide-item v-for="(item, i) in items" :key="i">
          <track-grid-item :item="item"></track-grid-item>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import TrackGridItem from "@/components/TrackGridItem";

export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    TrackGridItem,
  },
};
</script>
