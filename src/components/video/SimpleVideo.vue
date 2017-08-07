<template>
  <div>
    <h3>简单视频组件</h3>
    <video ref="video"/>
  </div>
</template>

<script>
  import Hls from 'hls.js'

  export default {
    name: 'simpleVideo',
    props: ['src'],
    created () {
    },
    mounted () {
      //      this.$refs.video.src = this.src
      if (Hls.isSupported()) {
        console.log('hello hls.js!')
        let hls = new Hls()
        let video = this.$refs.video
        hls.attachMedia(video)
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          console.log('video and hls.js are now bound together !')
          hls.loadSource(this.src)
          hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            console.log('manifest loaded, found ' + data.levels.length + ' quality level')
          })
        })
      }
    },
    activated () {
      this.$refs.video.play()
    }
  }

</script>

<style scoped>
  video {
    width: 100%    !important;
    height: auto   !important;
  }
</style>
