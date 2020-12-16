<template>
  <div>
    <channel-header
      :background="podcast.imageURL"
      :cover="podcast.imageURL"
      :title="podcast.title"
      :description="podcast.subtitle || podcast.description"
      :author="podcast.author"
      :link="podcast.link"
      :explicit="podcast.explicit"
    ></channel-header>

    <v-container fluid>
      <v-row>
        <v-col md="9" class="mx-auto">
          <track-podcast-list :items="episodes" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { convertEpisodesToItems } from "@/lib/utils";

export default {
  async asyncData({ app, params }) {
    const podcast = await app.$api.getPodcast(params.channel);

    return {
      slug: params.channel,
      podcast: podcast.data
    };
  },

  data() {
    return {
      episodes: []
    };
  },

  async created() {
    const episodes = await this.$api.getPodcastEpisodes(this.slug);
    this.episodes = convertEpisodesToItems(episodes.data);
  }
};
</script>
