<template>
  <page-template>
    <ProfileWallet />
    <wallet-tabs class="mt-8" />
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate"
import ProfileWallet from '~/components/Wallet/ProfileWallet.vue'
import WalletTabs from '~/components/Wallet/WalletTabs/WalletTabs.vue'

export default {
  components: {
    PageTemplate,
    ProfileWallet,
    WalletTabs
  },

  computed: {
    address () {
      return 'bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6'
      // TODO placeholder
      // return this.$store.getters['wallet/address']
    }
  },

  head() {
    const title = `Profilo ${this.address}`
    return {
      title: title,
      meta: [{ hid: 'og-title', name: 'og:title', content: title }]
    }
  }

}
</script>
