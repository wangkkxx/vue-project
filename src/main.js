import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './assets/style/app.less';
//import filters from './utils/filter';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon-font/iconfont.css';
Vue.use(ElementUI);


Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
