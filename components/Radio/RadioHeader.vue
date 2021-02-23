<template>
  <v-img
    :src="radio.picture"
    gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,1)"
    :height="$vuetify.breakpoint.mdAndUp ? height : ``"
  >
    <v-container fluid class="d-flex align-end fill-height">
      <v-row align="end">
        <v-col md="9" class="mx-auto py-8">
          <v-row justify="start" align="start">
            <v-col
              :class="{
                'flex-grow-0 flex-shrink-0 pr-6 pl-0':
                  $vuetify.breakpoint.mdAndUp
              }"
              v-if="radio.picture !== null"
            >
              <v-img :src="radio.picture" max-width="265" max-height="265" />
            </v-col>
            <v-col align-self="center" class="flex-grow-1 flex-shrink-0">
              <h1 class="text-h2">
                {{ radio.name }}
                <v-tooltip top v-if="explicit">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">
                      mdi-alpha-e-box
                    </v-icon>
                  </template>
                  <span>Explicit</span>
                </v-tooltip>
              </h1>
              <v-list-item class="px-0" v-if="subtitles.length">
                <v-list-item-content>
                  <v-list-item-subtitle
                    v-for="(subtitle, i) in subtitles"
                    :key="i"
                    v-html="subtitle"
                  >
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <p>{{ radio.country.name }}</p>
              <!-- Social link radio -->
              <div class="subtitle-1 min-h-24">
                <v-flex class="d-flex flex-row">
                  <v-btn icon href="#" target="_blank">
                    <v-icon>mdi-web</v-icon>
                  </v-btn>
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
              <!-- End Social link radio -->
              <v-card-actions class="px-0">
                <v-btn class="pr-4" color="white" depressed light>
                  <v-icon left>mdi-play</v-icon>
                  Play
                </v-btn>
                <v-btn outlined>
                  <v-icon left>mdi-plus-box-multiple</v-icon>
                  Follow
                </v-btn>
                <v-btn
                  icon
                  @click.stop="() => showDetails = true"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
            <dialog-radio-details
              v-if="showDetails"
              :city="radio.city.name"
              :country="radio.country.name"
              :topic="radio.topic"
              :stream-type="radio.stream_type"
              :contact="radio.contact"
              :description="radio.description"
              v-on:close="() => showDetails = false"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
import Genres from '@/components/Genres.vue'
import DialogRadioDetails from '@/components/Radio/DialogRadioDetails.vue'

export default {
  components: {
    Genres,
    DialogRadioDetails
  },
  props: {
    height: {
      type: Number,
      default: 550
    },
    radio: {
      type: Object,
      required: true
    },
    subtitles: {
      type: Array,
      default() {
        return []
      }
    },
    explicit: {
      type: Boolean
    }
  },
  data() {
    return {
      showDetails: false 
    }
  }
};
</script>
