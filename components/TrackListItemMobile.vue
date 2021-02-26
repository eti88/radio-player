<template>
  <v-list-item class="px-0">
    <v-img
      max-width="32"
      max-height="32"
      :src="item.picture"
      class="mr-4 ml-2"
      v-if="item.picture"
      @click.stop="onClick(item)"
    ></v-img>
    <v-btn class="mr-4 ml-1" v-else icon @click.stop="onClick(item)">
      <v-icon size="22" color="grey"> mdi-radio </v-icon>
    </v-btn>
    <v-list-item-content>
      <v-list-item-title
        class="font-weight-medium"
        v-html="item.name"
        @click="onClick(item)"
      >
      </v-list-item-title>
      <v-list-item-subtitle class="grey--text">
        <template v-for="(genre, i) in item.genres">
          <nuxt-link
            class="track-list__item_link"
            :to="`/radio/genre/${genre.slug}`"
            v-text="genre.name"
            :key="genre.slug"
          >
          </nuxt-link>
          <span :key="i" v-if="i < item.genres.length - 1" class="ml-n1 mr-1"
            >•</span
          >
        </template>
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action class="text-right ml-0">
      <v-btn icon color="grey">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  methods: {
    onClick(item) {
      this.$store.dispatch(`player/setCurrentTrack`, item.slug);
    }
  }
};
</script>
