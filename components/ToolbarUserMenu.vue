<template>
  <div class="text-center">
    <v-menu v-model="menu" :nudge-width="200" offset-y>
      <template v-slot:activator="{ on }">
        <v-avatar style="cursor:pointer" v-on="on" size="48">
          <Jdenticon :address="address" />
        </v-avatar>
      </template>

      <v-card width="300">
        <v-list-item>
          <v-list-item-avatar>
            <Jdenticon :address="address" />
          </v-list-item-avatar>
          <v-list-item-content></v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-action>
            <v-btn icon @click.stop="toogleAddress">
              <v-icon>mdi-qrcode-scan</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-subtitle>{{ address }}</v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="item.title" />
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-brightness-4</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Theme</v-list-item-title>
            <v-list-item-subtitle>{{
              dark_theme ? `dark` : `light`
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch
              v-model="$vuetify.theme.dark"
              @click="toggleTheme"
            ></v-switch>
          </v-list-item-action>
        </v-list-item>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import Jdenticon from "@/components/Jdenticon";

export default {
  components: {
    Jdenticon
  },
  data() {
    return {
      menu: false
    };
  },
  methods: {
    toggleTheme() {
      this.$store.commit(`app/toggleDarkTheme`);
      this.$vuetify.theme.dark = this.dark_theme;
    },
    toogleAddress() {
      this.$store.commit(`wallet/tooglePopup`)
    }
  },
  computed: {
    address() {
      return this.$store.getters[`wallet/address`];
    },
    dark_theme() {
      return this.$store.getters[`app/dark_theme`];
    },
    items() {
      return [
        {
          icon: "mdi-wallet",
          title: "Wallet",
          to: "/wallet"
        },
        {
          icon: "mdi-exit-to-app",
          title: "Log out",
          to: "/auth/logout"
        }
      ];
    }
  }
};
</script>

<style scoped>
.v-list-item__title,
.v-list-item__subtitle {
  white-space: normal;
}
</style>
