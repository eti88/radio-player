<template>
  <page-template>
    <track-grid-featured title="Italians Radio" :tracks="radios" />
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";

import TrackGridFeatured from "@/components/TrackGridFeatured";

export default {
  components: {
    PageTemplate,
    TrackGridFeatured
  },
  data() {
    return {
      radios: [
        {
          title: "Radio Deejay",
          cover: `${process.env.IPFS}/Qmcc52t9oNGie7iWN752JbBfMkmq4ZFKbwgUNu7k3djSZ8`,
          subtitle: "Italy",
          source:
            "https://radiodeejay-lh.akamaihd.net/i/RadioDeejay_Live_1@189857/master.m3u8",
          isHls: true
        },
        {
          title: "Radio M2O",
          cover: `${process.env.IPFS}/QmbKQYBtgXgRm18MWZBA37XWLSz7yuozzZZzHFFVMmCue1`,
          subtitle: "Italy",
          source:
            "https://radiom2o-lh.akamaihd.net/i/RadioM2o_Live_1@42518/master.m3u8",
          isHls: true
        },
        {
          title: "Radio Subasio",
          cover: `${process.env.IPFS}/QmNkmywWitbAwogeNSFPWyNFBHNr85JavmDoiRtYy11Cyk`,
          subtitle: "Italy",
          source: "https://icy.unitedradio.it/Subasio.mp3",
          isHls: false
        },
        {
          title: "Virgin Radio",
          cover: `${process.env.IPFS}/QmXXJZA9S5FgMGEH2ctH33EbQEnDT8xfK62Mgzxw4FFCnL`,
          subtitle: "Italy",
          source: "https://icecast.unitedradio.it/Virgin.mp3",
          isHls: false
        },
        {
          title: "Radio Freccia",
          cover: `${process.env.IPFS}/QmeuWhWd5EyPbjabCF5kF1yg2kSLRwywTqwePhR5hM8oTw`,
          subtitle: "Italy",
          source: "https://streamingv2.shoutcast.com/radiofreccia",
          isHls: false
        },
        {
          title: "Radio Ibiza",
          cover: `data:image/png;base64,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`,
          subtitle: "Italy",
          source: "https://ice02.fluidstream.net/ibiza.aac",
          isHls: false
        },
        {
          title: "Radio Monte Carlo",
          cover: `${process.env.IPFS}/QmNS1xtJN6xtLmBXx47E5y8NnuHJUQycmXCxg56gGQ7qtE`,
          subtitle: "Italy",
          source: "http://edge.radiomontecarlo.net/RMC.mp3",
          isHls: false
        },
        {
          title: "Radio 101",
          cover: `https://www.r101.it/upload/1564237987695.png`,
          subtitle: "Italy",
          source: "http://icecast.unitedradio.it/r101",
          isHls: false
        },
      ]
    };
  }
};
</script>
