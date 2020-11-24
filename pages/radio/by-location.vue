<template>
  <page-template>
    <page-menu></page-menu>

    <div class="d-flex mb-4">
      <v-btn icon to="/" exact class="ml-n3 mt-3" color="red darken-1">
        <v-icon> mdi-chevron-left </v-icon>
      </v-btn>
      <h2 class="text-h2 mb-1">
        Radio by <span class="red--text text--darken-1">location</span>
      </h2>
    </div>

    <countries class="mb-8"></countries>
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import Countries from "@/components/Countries";
import PageMenu from "@/components/PageMenu";

export default {
  head() {
    const title = `Radio by location`;
    return {
      title: title,
      meta: [{ hid: "og-title", name: "og:title", content: title }],
    };
  },

  components: {
    PageTemplate,
    Countries,
    PageMenu,
  },
};
</script>
