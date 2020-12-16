<template>
  <v-list-item-content class="text-right" v-if="$vuetify.breakpoint.mdAndUp">
    <v-list-item-subtitle class="caption">
      {{ toHHMMSS(currentTime) }}
      <span v-if="maxDuration > 0"> / {{ toHHMMSS(maxDuration) }} </span>
    </v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
import { toHHMMSS } from "@/lib/utils";

export default {
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    maxDuration: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toHHMMSS(data) {
      return toHHMMSS(data);
    }
  }
};
</script>
