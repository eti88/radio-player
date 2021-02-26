<template>
  <div>
    <radio-header
      :radio="radio"
      style="top:-65px;"
    />

    <!-- Body tadio page -->
    <!--
      TODO: Disabled until api-radio endpoint updated
    <genres
      v-if="radio.genres.length > 0"
      :items="radio.genres"
      :filter="true"
      style="height: 35px;"
    />
    -->
   <v-container fluid>
    <v-row>
      <v-col md="10" class="mx-auto">
          <track-grid-featured
            class="mb-8"
            :items="[radio]"
          >
            <template v-slot:title>
              Live stream
            </template>
          </track-grid-featured>
        </v-col>
      </v-row>
    </v-container>
    <!-- End Body tadio page -->
  </div>
</template>

<script>
// import Genres from '@/components/Genres.vue'
import RadioHeader from '@/components/Radio/RadioHeader.vue'

export default {

  components: {
    RadioHeader,
    // Genres
  },

  async asyncData({ app, params }) {
    const radio = await app.$api.getRadioBySlug(params.radio)
    return {
      radio: radio.data
    }
  },

  head() {
    const title = `${this.radio.name}`;
    return {
      title: title,
      meta: [{ hid: "og-title", name: "og:title", content: title }],
    };
  }

}
</script>
