import Vue from 'vue';
import Router from 'vue-router';
import x from '../pages/home/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: x,
    },
  ],
});
