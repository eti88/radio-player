<template>
  <v-progress-circular
    indeterminate
    color="red accent-3"
    :class="{
      'mx-3': $vuetify.breakpoint.mdAndUp,
      'mx-1': $vuetify.breakpoint.smAndDown,
    }"
  />
</template>
