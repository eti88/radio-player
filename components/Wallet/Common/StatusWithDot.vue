<template>
  <div>
    <span :class="capitalizedStatus === 'Passed' ? 'green' : 'red'" class="dot"></span>
    <span>{{ capitalizedStatus }}</span>
  </div>
</template>

<script>
import { captialize } from "@/lib/utils";

export default {
  name: 'status-with-dot',

  props: {
    status: {
      type: String,
      required: true
    }
  },

  computed: {
    capitalizedStatus () {
      return captialize(this.status)
    }
  }

}
</script>

<style scoped>
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
    display: inline-flex;
  }
</style>