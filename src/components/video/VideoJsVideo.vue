<template>
  <div>
    <h3>VideoJS视频组件</h3>
    <video-player ref="videoPlayer"
                  :options="playerOptions"/>
  </div>
</template>

<script>
  import { videoPlayer } from 'vue-video-player'

  export default {
    name: 'videoJsVideo',
    props: ['src'],
    components: {videoPlayer},
    data () {
      return {
        playerOptions: {
          controls: false,
          // autoplay: true,
          fluid: true,
          sources: [{
            type: 'video/mp4',
            src: this.src
          }]
        }
      }
    },
    mounted () {
    },
    activated () {
      this.$refs.videoPlayer.player.play()
    },
    methods: {}
  }

</script>

<style scoped>


</style>
