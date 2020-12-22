<template>
  <div>
    <h2 class="text-h2 mb-1">
      Podcasts
    </h2>
    <div class="d-flex">
      <slider>
        <template v-for="podcast in podcasts">
          <div class="ma-3 pr-4 text-center" :key="podcast.id">
            <nuxt-link :to="`/podcast/${podcast.slug}`">
              <v-avatar :width="size" :height="size">
                <v-img :src="podcast.imageURL" :alt="podcast.title" />
              </v-avatar>
            </nuxt-link>
            <div class="pt-2 track-grid__item_title">
              <router-link
                nuxt
                :to="`/podcast/${podcast.slug}`"
                class="font-weight-medium"
                >{{ podcast.name }}</router-link
              >
            </div>
          </div>
        </template>
      </slider>
    </div>
  </div>
</template>

<script>
import { convertPodcastsToItems } from "@/lib/utils";

export default {
  data() {
    return {
      podcasts: []
    };
  },

  async created() {
    const podcasts = await this.$api.getPodcasts();
    this.podcasts = convertPodcastsToItems(podcasts.data);
  },
  computed: {
    size() {
      return this.$vuetify.breakpoint.mdAndUp ? 185 : 110;
    }
  }
};
</script>
