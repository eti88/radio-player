<template>
  <v-slider
    class="mx-0 player-slider"
    color="red accent-3"
    height="6"
    readonly
    :step="1"
    :min="0"
    :max="100"
    :value="100"
    hide-details
    background-color="grey darken-3"
  />
</template>
