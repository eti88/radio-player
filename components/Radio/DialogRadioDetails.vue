<template>
  <v-dialog
    :fullscreen="$vuetify.breakpoint.smAndDown"
    persistent
    max-width="400"
    :value="true"
  >
    <v-card>
      <v-sheet height="100%" class="pa-5">
        <v-container class="fill-height">
          <v-row>
            <v-col cols="6">
              <div class="subtitle-1">
                <p class="body-2 mb-2 white--text">
                  {{ city }}
                </p>
              </div>
              <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                City
              </div>
            </v-col>
            <v-col cols="6">
              <div class="subtitle-1">
                <p class="body-2 mb-2 white--text">
                  {{ streamType }}
                </p>
              </div>
              <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                Stream type
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <div class="subtitle-1">
                <p class="body-2 mb-2 white--text">
                  {{ country }}
                </p>
              </div>
              <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                Country
              </div>
            </v-col>
            <v-col cols="6">
              <div class="subtitle-1">
                <p class="body-2 mb-2 white--text">
                  {{ contact }}
                </p>
              </div>
              <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                Contact
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <div class="subtitle-1">
                <p class="body-2 mb-2 white--text">
                  {{ topic }}
                </p>
              </div>
              <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                Topics
              </div>
            </v-col>
            <v-col cols="6">
              <div class="subtitle-1">
                <p class="body-2 mb-2 white--text">
                  {{ description }}
                </p>
              </div>
              <div class="grey--text subtitle-2 text--darken-2 font-weight-regular">
                Description
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    city: {
      type: String
    },
    country: {
      type: String
    },
    topic: {
      type: String
    },
    streamType: {
      type: String
    },
    contact: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>
