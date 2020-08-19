import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import startQiankun from "./micro";
Vue.config.productionTip = false;

import routes from "./routes";
Vue.use(VueRouter);
startQiankun();
/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = new VueRouter({
  mode: "history",
  routes,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
