<template>
  <div>
    <h2 class="text-h2 mb-2">
      Mood & Genres
    </h2>

    <v-container class="pa-0">
      <v-row>
        <v-col cols="6" md="2" class="py-0" v-for="i in genres" :key="i.slug">
          <v-alert colored-border :color="createRandomColor()" border="left">
            <nuxt-link :to="`/radio/genre/${i.slug}`">
              <span
                class="w-100 fill-height text-truncate white--text font-weight-medium"
                >{{ i.name }}</span
              >
            </nuxt-link>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onboarding: 0,
      genres: [],
      length: 2
    };
  },
  async created() {
    try {
      const genres = await this.$api.getGenres();
      this.genres = genres;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    createRandomColor() {
      return "hsla(" + Math.random() * 360 + ", 70%, 65%, 1)";
    }
  }
};
</script>

<style>
#genres .v-alert__content::first-letter {
  text-transform: uppercase !important;
  font-size: 16px !important;
}

#genres {
  align-content: space-between;
}

#genres a.span {
  color: #fff !important;
}
</style>
