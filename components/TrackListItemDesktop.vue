<template>
  <v-list-item>
    <track-img
      :size="32"
      :size-btn="25"
      :picture="item.picture"
      :streamUrl="item.stream_url"
      class="mr-4"
      v-if="item.picture"
      v-on:select="
        onClick(
          item.picture,
          item.name,
          `${item.city.name}, ${item.country.name}`,
          item.stream_url,
          item.stream_type === 'hls'
        )
      "
    ></track-img>

    <v-list-item-title
      class="font-weight-medium"
      v-html="item.name"
      @click="
        onClick(
          item.picture,
          item.name,
          `${item.city.name}, ${item.country.name}`,
          item.stream_url,
          item.stream_type === 'hls'
        )
      "
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
    onClick(cover, title, subtitle, source, isHls) {
      this.$store.commit(`player/SET_CURRENT_TRACK`, {
        cover: cover,
        title: title,
        subtitle: subtitle,
        source: source,
        isHls: isHls
      });
    }
  }
};
</script>
