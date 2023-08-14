import VueCanvasPoster from './canvas-poster.vue'

export function install(app, options) {
  app.component('vue-canvas-poster', VueCanvasPoster)
}

// export { VueCanvasPoster }
export default {
  install
}

