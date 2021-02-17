<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="12" class="py-0">
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
          <!-- End Tabs menu -->
        </v-flex>

        <v-card class="overflow-none">
          <!-- Tabs body -->
          <v-flex>
            <v-tabs-items :value="tab">

              <!-- Balance tab body -->
              <v-tab-item value="balance">
                <Balance  class="pa-5" />
              </v-tab-item>
              <!-- End Balance tab body -->

              <!-- Earn tab body -->
              <v-tab-item value="earn">
                <Staking  class="pa-5" />
              </v-tab-item>
              <!-- End Earn tab body -->

              <!-- Gov. tab body -->
              <v-tab-item value="governance">
                <Governance  class="pa-5" />
              </v-tab-item>
              <!-- End Gov. tab body -->

            </v-tabs-items>
          </v-flex>
          <!-- End Tabs body -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Balance from '~/components/Wallet/WalletTabs/Tabs/Balance.vue'
import Staking from '~/components/Wallet/WalletTabs/Tabs/Staking.vue'
import Governance from '~/components/Wallet/WalletTabs/Tabs/Governance.vue'

export default {
  components: {
    Balance,
    Staking,
    Governance
  },

  data () {
    return {
      tab: null,
      tabs: [
        { name: 'Balance' , ref: '#balance' },
        { name: 'Earn' , ref: '#earn' },
        { name: 'Governance' , ref: '#governance' }
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
</style>