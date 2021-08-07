// Plugin export
import FormLoader from './components/FormLoader.vue'

const Fractal = {
  install(Vue) {
    Vue.component('FormLoader', FormLoader)    
  }  
}

export default Fractal
