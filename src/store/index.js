// vuex模块化
import Vue from 'vue';
import Vuex from 'vuex';
import demo from './modules/demo';
import appStore from './modules/appStore';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        appStore,
        demo,
    }
});