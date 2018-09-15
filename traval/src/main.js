import Vue from 'vue';
import router from './router';
import 'style/reset.css';
import 'style/border.css';
import 'style/iconfont.css';
import fastclick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Home from './pages/home/Home';

Vue.config.productionTip = false;
fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  router,
  render: h => h(Home)
});
