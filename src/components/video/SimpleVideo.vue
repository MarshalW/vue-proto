<template>
  <div>
    <h3>简单视频组件</h3>
    <video ref="video"/>
  </div>
</template>

<script>
  export default {
    name: 'simpleVideo',
    props: ['src'],
    mounted () {
      this.$refs.video.src = this.src
    },
    activated () {
      this.$refs.video.play()
    }
  }

</script>

<style scoped>


</style>
