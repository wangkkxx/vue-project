import Vue from 'vue';
import Router from 'vue-router';
import { routes, otherRoutes } from './routes';
Vue.use(Router);

const router = new Router({
    mode: 'history',    //去掉#号
    routes: [...routes, ...otherRoutes]
    //routes, otherRoute
})
//路由拦截器
// router.beforeEach((to, from, next) => {
// 　　//根据字段判断是否路由过滤
// 　　if(to.meta.requireAuth) { // 判断该路由是否需要登录权限
// 　　　　if(localStorage.getItem('token')) { //身份信息获取
// 　　　　　　next();
// 　　　　} else {
// 　　　　　　next({
// 　　　　　　　　path: '/login'
// 　　　　　　})
// 　　　　}
// 　　} else {
// 　　　　next();
// 　　}
// });
export default router;
