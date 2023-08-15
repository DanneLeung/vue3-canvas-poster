import VueCanvasPoster from './canvas-poster.vue'
export function install(app, options) {
  app.component('vue-canvas-poster', VueCanvasPoster)
}

export default {
  install
}

export * from './canvas-poster.vue'