<template>
  <div>
    <h1>首页</h1>
    <!--http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4-->
    <!--https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8-->
    <!--http://pili-live-hls.wx.china.cn/chinalive/chinalive_20_1482119474047.m3u8-->
    <!--https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8-->
    <SimpleVideo
      src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"/>
  </div>
</template>

<script>
  import SimpleVideo from '@/components/video/SimpleVideo'

  export default {
    name: 'dashboard',
    components: {SimpleVideo},
    data () {
      return {}
    },
    computed: {},
    created () {
    },
    mounted () {
    },
    updated () {
    },
    activated () {
    },
    deactivated () {
    },
    beforeDestroy () {
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
