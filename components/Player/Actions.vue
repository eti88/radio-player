<template>
  <v-list-item-icon>
    <player-btn-prev></player-btn-prev>
    <player-btn-play></player-btn-play>
    <player-btn-next></player-btn-next>
  </v-list-item-icon>
</template>

<script>
import PlayerBtnPrev from "@/components/Player/BtnPrev";
import PlayerBtnPlay from "@/components/Player/BtnPlay";
import PlayerBtnNext from "@/components/Player/BtnNext";

export default {
  components: {
    PlayerBtnPrev,
    PlayerBtnPlay,
    PlayerBtnNext,
  },
};
</script>
