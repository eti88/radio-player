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
      v-html="item.name"
      @click="onClick(item)"
    >
    </v-list-item-title>
    <v-list-item-title class="grey--text" style="max-width: 320px">
      {{ item.city.name }},
      <nuxt-link class="track-list__item_link" :to="`/${item.country}`">
        {{ item.country.name }}
      </nuxt-link>
    </v-list-item-title>
    <v-list-item-title class="grey--text">
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
    </v-list-item-title>
    <v-list-item-action class="text-right mr-6">
      <v-btn icon @click.stop="onFavorite(item)">
        <v-icon color="red darken-4" v-if="isFavorite(item)">mdi-heart</v-icon>
        <v-icon color="grey" v-else>mdi-heart-outline</v-icon>
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
    onClick(item) {
      this.$store.dispatch(`player/setCurrentTrack`, item.slug);
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
