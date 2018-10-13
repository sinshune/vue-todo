import Vue from 'vue'
import App from './app.vue'

// render: (h) => h(App)  h === document.createElement()
new Vue({
  el: '#root',
  render: (h) => h(App)
});