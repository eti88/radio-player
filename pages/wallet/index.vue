<template>
  <page-template>
    <wallet-overview class="col-md-10 mx-auto" />
    <wallet-tabs class="mt-8 col-md-10" />
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import WalletOverview from "~/components/Wallet/WalletOverview.vue";
import WalletTabs from "~/components/Wallet/WalletTabs/WalletTabs.vue";

export default {
  components: {
    PageTemplate,
    WalletOverview,
    WalletTabs
  },

  computed: {
    address() {
      return "bitsong13kfw8fw58h7zqk6vrsrllvvdee5xw8us9380m6";
      // TODO placeholder
      // return this.$store.getters['wallet/address']
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
