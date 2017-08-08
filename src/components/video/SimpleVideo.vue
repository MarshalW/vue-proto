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
      // 针对支持hls并且不是safari的浏览器
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        (typeof window.orientation !== 'undefined')) {
        this.setHlsWithNative()
      } else {
        this.setHlsWithHlsJs()
      }
    },
    activated () {
      this.$refs.video.play()
    },
    methods: {
      setHlsWithHlsJs () {
        let hls = new Hls()
        let video = this.$refs.video
        hls.attachMedia(video)
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          // console.log('video and hls.js are now bound together !')
          hls.loadSource(this.src)
          hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            // console.log('manifest loaded, found ' + data.levels.length + ' quality level')
          })
        })

        hls.on(Hls.Events.ERROR, function (event, data) {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                // try to recover network error
                console.log('fatal network error encountered, try to recover')
                hls.startLoad()
                break
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.log('fatal media error encountered, try to recover')
                hls.recoverMediaError()
                break
              default:
                // cannot recover
                hls.destroy()
                break
            }
          }
        })
      },
      setHlsWithNative () {
        this.$refs.video.src = this.src
      }
    }

  }

</script>

<style scoped>
  video {
    width: 100% !important;
    height: auto !important;
  }
</style>
