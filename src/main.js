// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// js
// import './'

// css
import './assets/css/reset.css';
import './assets/font/iconfont.css';

// 引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import swiper/dist/css/swiper.css
import 'swiper/swiper-bundle.css';
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
