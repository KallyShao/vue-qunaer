import Vue from 'vue';
import router from './router';
import store from './store/index.js'
import 'style/reset.css';
import 'style/border.css';
import 'style/iconfont.css';
import fastclick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import App from './App';

Vue.config.productionTip = false;
fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
