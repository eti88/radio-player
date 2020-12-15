<template>
  <v-app-bar
    hide-on-scroll
    :app="!isPodcast"
    :absolute="isPodcast"
    :color="!isPodcast ? `black` : `transparent`"
    fixed
    flat
  >
    <toolbar-content></toolbar-content>
  </v-app-bar>
</template>

<script>
import ToolbarContent from "@/components/ToolbarContent";

export default {
  components: {
    ToolbarContent
  },
  computed: {
    isPodcast() {
      return this.$route.name === "podcast-channel";
    }
  }
};
</script>
