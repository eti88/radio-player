<template>
  <v-img
    :src="background"
    gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,1)"
    :height="height"
  >
    <v-container fluid class="d-flex align-end fill-height">
      <v-row align="end">
        <v-col md="9" class="mx-auto py-8">
          <v-row justify="start" align="start">
            <v-col
              class="flex-grow-0 flex-shrink-0 pr-6 pl-0"
              v-if="cover !== null"
            >
              <v-img :src="cover" max-width="265" max-height="265" />
            </v-col>
            <v-col align-self="center" class="flex-grow-1 flex-shrink-0">
              <h1 class="text-h2">
                {{ title }}
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
              <p v-html="description"></p>
              <v-card-actions class="px-0">
                <v-btn depressed color="white" light>
                  <v-icon left>mdi-play</v-icon>
                  Play Episodes
                </v-btn>
                <v-btn outlined>
                  <v-icon left>mdi-plus-box-multiple</v-icon>
                  Follow
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 550
    },
    background: {
      type: String,
      default: ""
    },
    cover: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    subtitles: {
      type: Array,
      default() {
        return [];
      }
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>
