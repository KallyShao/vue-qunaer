import Vue from 'vue';
import router from './router';
import 'style/reset.css';
import 'style/border.css';
import 'style/iconfont.css';
import fastclick from 'fastclick';

import Home from './pages/home/Home';

Vue.config.productionTip = false;
fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Home)
});
