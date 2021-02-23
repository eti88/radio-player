<template>
  <div>
    <div v-html="identicon"></div>
  </div>
</template>

<script>
import { toSvg } from "jdenticon";

export default {
  props: {
    address: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 40
    }
  },

  computed: {
    identicon: function() {
      return toSvg(this.address, this.size);
    }
  }
};
</script>
