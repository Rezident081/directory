import Vue from 'vue'
import App from './components/App.vue'

Vue.prototype.$store = new Vue();

const app = new Vue({
  el: '#app',
  render: h => h(App)
});

export default app
