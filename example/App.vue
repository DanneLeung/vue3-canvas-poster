<template>
  <img :src="src" alt="" class="share-image">
  <vue3-canvas-poster class="poster" :widthPixels="1000" :painting="painting" @success="success"
    @fail="fail"></vue3-canvas-poster>
</template>
<script lang="ts">
import Vue3CanvasPoster from '../dist/vue3-canvas-poster'
import { drawPoster } from './painter'
export default {
  name: 'App',
  components: {
    Vue3CanvasPoster
  },
  data() {
    return {
      src: '',
      painting: {}
    }
  },
  mounted() {
    const params = {
      type: 'pro' // 尝试换一下text,image
    }
    drawPoster(params).then((res: any) => {
      this.painting = res
    })
  },
  methods: {
    // 保存
    success(src: string) {
      this.src = src
    },
    fail(err: any) {
      console.log('fail', err)
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
}

.share-image {
  width: 100%;
  height: auto;
}
</style>