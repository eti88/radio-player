<template>
  <page-template>
    <ProfileWallet class="col-md-10 mx-auto" />
    <wallet-tabs class="mt-8 col-md-10" />
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import ProfileWallet from "~/components/Wallet/ProfileWallet.vue";
import WalletTabs from "~/components/Wallet/WalletTabs/WalletTabs.vue";

export default {
  components: {
    PageTemplate,
    ProfileWallet,
    WalletTabs
  },

  computed: {
    address() {
      return this.$store.getters['wallet/address']
    }
  },

  head() {
    const title = `Profilo ${this.address}`;
    return {
      title: title,
      meta: [{ hid: "og-title", name: "og:title", content: title }]
    };
  }
};
</script>
