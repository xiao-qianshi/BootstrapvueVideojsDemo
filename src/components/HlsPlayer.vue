<template>
  <div class="hello">
    <video
      v-bind:id="id"
      v-bind:title="title"
      ref="playidref"
      class="video-js vjs-fluid"
      controls
      autoplay
      muted
      preload="auto"
      poster="../assets/timg.jpg"
      data-setup={}
    >
      <source v-bind:src="url" type="application/x-mpegURL" />
    </video>
  </div>
</template>

<script>
import Videojs from 'video.js'
export default {
  name: 'HlsPlayer',
  props: {
    id: {
      typy: String,
      required: true
    },
    title: {
      type: String
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      player: null
    }
  },
  mounted: function () {
    console.log(this.$refs.playidref)
    this.player = Videojs(this.$refs.playidref, {responsive: true})
  },
  beforeDestroy: function () {
    this.player.dispose()
  }
}
</script>
