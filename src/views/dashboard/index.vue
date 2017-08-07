<template>
  <div>
    <h1>首页</h1>
    <!--http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4-->
    <SimpleVideo src="https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8"/>
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
