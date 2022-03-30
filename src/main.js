import Vue from 'vue'
import App from './App.vue'
import Echarts from './plugins/echarts';
import '../node_modules/echarts/map/js/china.js';
import '../node_modules/echarts/map/js/world.js';
import './assets/css/common.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';
import router from './router/index';
import VueRouter from 'vue-router';
import  './plugins/vant';
//注册插件
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(Echarts)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
