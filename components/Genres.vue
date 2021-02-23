<template>
  <v-container fluid class="pa-0">
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
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    filter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      onboarding: 0,
      genres: [],
      length: 2,
    };
  },
  async created() {
    try {
      const genres = await this.$api.getGenres();
      if (this.filter) {
        this.genres = genres.filter((item) => {
          if (typeof this.items.genres !== 'undefined') {
            return this.items.genres.indexOf(item.id) !== -1
          } else {
            return this.items.indexOf(item.id) !== -1 
          }
        })
      } else {
        this.genres = genres;
      }
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    createRandomColor() {
      return "hsla(" + Math.random() * 360 + ", 70%, 65%, 1)";
    },
  },
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
