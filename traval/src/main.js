import Vue from 'vue';
import router from './router';
import './assets/style/reset.css';
import './assets/style/border.css';
import fastclick from 'fastclick';

import App from './App';

Vue.config.productionTip = false;
fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
