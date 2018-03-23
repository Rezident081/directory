import Vue from 'vue'
import Container from './components/post/Container.vue'

const app = new Vue({
  el: '#app',
  render: h => h(Container)
});

export default app
