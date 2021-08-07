// Plugin export
// import Vue from 'vue'
import FormLoader from './components/FormLoader.vue'

const Fractal = {
  install(Vue) {
    Vue.component('FormLoader', FormLoader)    
  }  
}

export default Fractal
