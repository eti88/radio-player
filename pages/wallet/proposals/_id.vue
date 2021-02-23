<template>
  <page-template>
    <v-breadcrumbs :items="breadcrumbs" class="pa-0 ma-0">
      <template v-slot:divider>
        <v-icon color="grey">mdi-play</v-icon>
      </template>
    </v-breadcrumbs>
    <h1 class="text-h2 mb-2">Proposal details</h1>
    <proposal-details :id="id" />
    <votes-details :id="id" class="my-5" />
    <depositors :id="id" />
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate"
import ProposalDetails from '~/components/Wallet/Governance/ProposalDetails.vue'
import VotesDetails from '~/components/Wallet/Governance/VotesDetails.vue'
import Depositors from '~/components/Wallet/Governance/Depositors.vue'

export default {
  
  components: {
    PageTemplate,
    ProposalDetails,
    VotesDetails,
    Depositors
  },

  async fetch () {
    this.id = this.$route.params.id
  },

  data() {
    return {
      id: null,
      breadcrumbs: [
        {
          text: 'Radio',
          disabled: false,
          href: '/'
        },
        {
          text: 'Wallet',
          disabled: false,
          href: '/wallet'
        },
        {
          text: 'Governance',
          disabled: true,
          href: '#'
        }
      ]
    }
  },

  head() {
    const title = `Proposal details ${this.id}`
    return {
      title: title,
      meta: [{ hid: 'og-title', name: 'og:title', content: title }]
    }
  }

}
</script>
