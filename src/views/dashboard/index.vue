<template>
  <div>
    <h1>首页</h1>
    <VideoJsVideo src="http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4"/>
  </div>
</template>

<script>
  import VideoJsVideo from '@/components/video/VideoJsVideo'

  export default {
    name: 'dashboard',
    components: {VideoJsVideo},
    data () {
      return {}
    },
    computed: {},
    created () {
    },
    mounted () {
      //      this.$refs.video.addEventListener('ended', this.videoEndedAction, false)
      //      this.$refs.video.addEventListener('pause', this.videoPauseAction, false)
      //      this.$refs.video.src = 'http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4'
    },
    updated () {
    },
    activated () {
      //      this.$refs.video.play()
    },
    deactivated () {
    },
    beforeDestroy () {
    },
    methods: {
      videoEndedAction () {
        console.log('video ended ..')
      },
      videoPauseAction () {
        console.log('video paused ..')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
