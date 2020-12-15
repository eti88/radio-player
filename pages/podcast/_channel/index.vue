<template>
  <div>
    <channel-header
      :background="podcast.imageURL"
      :cover="podcast.imageURL"
      :title="podcast.title"
      :description="podcast.subtitle"
    ></channel-header>
  </div>
</template>

<script>
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
    this.episodes = episodes.data;
  }
};
</script>
