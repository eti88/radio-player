<template>
  <div>
    <radio-header
      :background="radio.picture"
      :cover="radio.picture"
      :author="radio.name"
      :description="radio.short_description || radio.country.name"
      :link="radio.website"
      :explicit="false"
      :genres="radio.genres"
      style="top:-65px;"
    />

    <v-container fluid>
      <v-row>
        <v-col cols="12" md="9" lg="9" class="mx-auto">
          <radio-tabs
            :tracks="tracks"
            :country="radio.country"
            :city="radio.city"
            :topic="radio.topic"
            :contact="radio.contact"
            :description="radio.description"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RadioHeader from '@/components/RadioHeader.vue'
import RadioTabs from '@/components/Radio/RadioTabs.vue'

export default {

  components: {
    RadioHeader,
    RadioTabs
  },

  async asyncData({ app, params }) {
    // TODO: Not working endpoint
    // const radio = await app.$api.getRadioBySlug(params.radio)

    // TODO: Remove placeholder whent fixed enpoint call
    const radio = {
      genres: [
        "5fbe3fc1be403270eb17d97b",
        "5fbe3fc1be403270eb17d97a",
        "5fbe3fc1be403270eb17d975",
        "5fbe3fc1be403270eb17d976"
      ],
      disabled: false,
      slug_history: [
        "virgin-radio"
      ],
      _id: "5fd7a1c1df5ace50f6784c50",
      name: "Virgin Radio",
      short_description:"",
      description:"",
      city: {
        loc: {
          type: "Point",
          coordinates: [ 9.1076929,45.4627124 ]
        },
        slug_history:[ "milan" ],
        _id: "5fbe3fc1be403270eb17d983",
        name:"Milan",
        country: "5fbe3fc1be403270eb17d980",
        slug: "milan",
        id: "5fbe3fc1be403270eb17d983"
      },
      country:{
        slug_history: [ "italy" ],
        _id: "5fbe3fc1be403270eb17d980",
        name: "Italy",
        slug: "italy",
        id: "5fbe3fc1be403270eb17d980"
      },
      topic: "",
      website: "https://www.virginradio.it/",
      contact:"",
      stream_url: "https://icecast.unitedradio.it/Virgin.mp3",
      stream_type:"mp3",
      picture: "https://ipfs-1.bitsong.network/ipfs/QmXXJZA9S5FgMGEH2ctH33EbQEnDT8xfK62Mgzxw4FFCnL",
      slug: "virgin-radio",
      createdAt: "2020-12-14T17:32:49.065Z",
      updatedAt: "2020-12-14T18:05:10.568Z",
      id: "5fd7a1c1df5ace50f6784c50"
    }
    // TODO: replace tracks with real value
    const tracks = [
      {
        id: 1,
        picture: null,
        stream_url: '',
        name: 'Track 1',
        city: {
          loc: {
          type: "Point",
            coordinates: [ 9.1076929,45.4627124 ]
          },
          slug_history:[ "milan" ],
          _id: "5fbe3fc1be403270eb17d983",
          name:"Milan",
          country: "5fbe3fc1be403270eb17d980",
          slug: "milan",
          id: "5fbe3fc1be403270eb17d983"
        },
        country: {
          slug_history: [ "italy" ],
          _id: "5fbe3fc1be403270eb17d980",
          name: "Italy",
          slug: "italy",
          id: "5fbe3fc1be403270eb17d980"
        },
        genres: [
          "5fbe3fc1be403270eb17d97b",
          "5fbe3fc1be403270eb17d97a",
          "5fbe3fc1be403270eb17d975",
          "5fbe3fc1be403270eb17d976"
        ]
      },
      {
        id: 2,
        picture: null,
        stream_url: '',
        name: 'Track 2',
        city: {
          loc: {
          type: "Point",
            coordinates: [ 9.1076929,45.4627124 ]
          },
          slug_history:[ "milan" ],
          _id: "5fbe3fc1be403270eb17d983",
          name:"Milan",
          country: "5fbe3fc1be403270eb17d980",
          slug: "milan",
          id: "5fbe3fc1be403270eb17d983"
        },
        country: {
          slug_history: [ "italy" ],
          _id: "5fbe3fc1be403270eb17d980",
          name: "Italy",
          slug: "italy",
          id: "5fbe3fc1be403270eb17d980"
        },
        genres: [
          "5fbe3fc1be403270eb17d97b",
          "5fbe3fc1be403270eb17d97a",
          "5fbe3fc1be403270eb17d975",
          "5fbe3fc1be403270eb17d976"
        ]
      },
      {
        id: 3,
        picture: null,
        stream_url: '',
        name: 'Track 3',
        city: {
          loc: {
          type: "Point",
            coordinates: [ 9.1076929,45.4627124 ]
          },
          slug_history:[ "milan" ],
          _id: "5fbe3fc1be403270eb17d983",
          name:"Milan",
          country: "5fbe3fc1be403270eb17d980",
          slug: "milan",
          id: "5fbe3fc1be403270eb17d983"
        },
        country: {
          slug_history: [ "italy" ],
          _id: "5fbe3fc1be403270eb17d980",
          name: "Italy",
          slug: "italy",
          id: "5fbe3fc1be403270eb17d980"
        },
        genres: [
          "5fbe3fc1be403270eb17d97b",
          "5fbe3fc1be403270eb17d97a",
          "5fbe3fc1be403270eb17d975",
          "5fbe3fc1be403270eb17d976"
        ]
      }
    ]

    return {
      radio: radio,
      tracks: tracks
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
