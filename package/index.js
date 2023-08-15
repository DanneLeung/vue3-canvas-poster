import { App, Component, Plugin, defineComponent } from 'vue';
import Vue3CanvasPoster from './canvas-poster.vue'
const install = (comp) => {
  const c = comp;
  c.install = function (app) {
    app.component(c.name, comp);
  };

  return comp;
}


export default install(Vue3CanvasPoster)