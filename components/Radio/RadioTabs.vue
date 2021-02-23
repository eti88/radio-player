<template>
  <div>
    <v-flex class="tabs-wrapper overflow-none mb-3">
      <!-- Tabs menu -->
      <v-tabs
        v-model="tab"
        grow
        centered
        show-arrows
      >
        <v-tab
          v-for="(item, i) in tabs"
          :key="i"
          :href="item.ref"
          class="black"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-flex>

    <!-- Tabs body -->
      <v-flex>
        <v-tabs-items :value="tab">

          <!-- Tracks tab body -->
          <v-tab-item value="tracks" class="black">
            <track-list :items="tracks" />
          </v-tab-item>

          <!-- Details tab body -->
          <v-tab-item value="details" class="black">
            <v-row>
              <v-col cols="12" md="6">
                <div v-if="country !== null && city !== null" class="subtitle-1 min-h-24">
                  <nuxt-link :to="`/radio/${country.slug}/${city.slug}`">
                    <span class="white--text font-weight-medium">
                      {{ country.name }} - {{ city.name }}
                    </span>
                  </nuxt-link>
                </div>
                <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                  Country
                </div>
                <div class="subtitle-1 min-h-24">
                  {{ topic }}
                </div>
                <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                  Topic
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="subtitle-1 min-h-24">
                  {{ contact }}
                </div>
                <div
                  class="grey--text subtitle-2 text--darken-2 font-weight-regular"
                >
                  Contact
                </div>
                <div class="subtitle-1 min-h-24">
                  <v-flex class="d-flex flex-row">
                    <v-btn icon href="#" target="_blank">
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon href="#" target="_blank">
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn icon href="#" target="_blank">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon href="#" target="_blank">
                      <v-icon>mdi-youtube</v-icon>
                    </v-btn>
                  </v-flex>
                </div>
                <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                  Socials
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="subtitle-1 min-h-24">
                  <p class="body-2 mb-5 white--text">
                    {{ description }}
                  </p>
                </div>
                <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                  Description
                </div>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
    </v-flex>
    <!-- End Tabs body -->
  </div>
</template>

<script>
import TrackList from '@/components/TrackList.vue'

export default {
  components: { TrackList },
  props: {
    tracks: {
      type: Array,
      default() {
        return [];
      }
    },
    country: {
      type: Object,
      default: null
    },
    city: {
      type: Object,
      default: null
    },
    topic: {
      type: String,
      default: ''
    },
    contact: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tab: null,
      tabs: [
        { name: 'Tracks' , ref: '#tracks' },
        { name: 'Details' , ref: '#details' }
      ]
    }
  }
}
</script>

<style scoped>
.overflow-none {
  overflow: hidden;
}
.tabs-wrapper {
  border-radius: 5px 5px 0 0;
}
.min-h-24 {
  min-height: 24px;
}
</style>