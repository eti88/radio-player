<template>
  <div class="slider-container d-flex">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.slider-container
  overflow-x: auto

.slider-container::-webkit-scrollbar
  display: none
</style>
