import Vue from 'vue'
import App from './components/App.vue'
import VueResource from 'vue-resource'
import VModal from 'vue-js-modal'


Vue.use(VueResource)
Vue.use(VModal, { dynamic: true })

const app = new Vue({
  el: '#appDir',
  render: h => h(App)
});

export default app
