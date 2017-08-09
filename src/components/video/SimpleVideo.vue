<template>
  <div>
    <h3>简单视频组件</h3>
    <video ref="video" playsinline controls/>
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
      // safari或者移动浏览器或者mp4情况 TODO 判断条件需要测试确认
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        (typeof window.orientation !== 'undefined') ||
        /^(http:\/\/|https:\/\/|www\.).*(\.mp4|\.mkv)$/.test(this.src)
      ) {
        console.log('>>>> play with native')
        this.setPlayWithNative()
      } else {
        console.log('>>>> play with hls.js')
        this.setPlayWithHlsJs()
      }

      // this.setPlayWithHlsJs()
    },
    activated () {
      this.$refs.video.play()
    },
    methods: {
      setPlayWithHlsJs () {
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
      setPlayWithNative () {
        this.$refs.video.src = this.src
        this.$refs.video.addEventListener('error', this.onError, true)
        this.setNormalEventListeners()
      },
      setNormalEventListeners () {
        // https://www.w3schools.com/Tags/av_event_loadedmetadata.asp
        // https://www.w3schools.com/Tags/ref_av_dom.asp
        let events = ['loadstart', 'durationchange', 'loadedmetadata',
          'loadeddata', 'progress', 'canplay', 'canplaythrough', 'stalled',
          'pause', 'play', 'playing', 'suspend', 'timeupdate', 'volumechange', 'waiting']
        events.forEach((eventName) => {
          this.$refs.video.addEventListener(eventName, () => {
            console.log(eventName)
          }, true)
        })
      },
      onError (event) {
        // https://developer.mozilla.org/en-US/docs/Web/API/MediaError
        switch (event.target.error.code) {
          case event.target.error.MEDIA_ERR_ABORTED:
            alert('You aborted the video playback.')
            break
          case event.target.error.MEDIA_ERR_NETWORK:
            alert('A network error caused the video download to fail part-way.')
            break
          case event.target.error.MEDIA_ERR_DECODE:
            alert('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.')
            break
          case event.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            alert('The video could not be loaded, either because the server or network failed or because the format is not supported.')
            break
          default:
            alert('An unknown error occurred.')
            break
        }
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
