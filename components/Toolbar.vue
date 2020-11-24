<template>
  <v-app-bar hide-on-scroll app color="black" fixed flat>
    <toolbar-content></toolbar-content>
  </v-app-bar>
</template>

<script>
import ToolbarContent from "@/components/ToolbarContent";

export default {
  components: {
    ToolbarContent,
  },
};
</script>
