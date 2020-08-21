import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { registerMicroApps, start } from "qiankun";
import "core-js/stable/promise";
import "core-js/stable/symbol";
import "core-js/stable/string/starts-with";
import "core-js/web/url";
Vue.config.productionTip = false;

import router from "./routes";
Vue.use(VueRouter);
/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#appContainer");

registerMicroApps([
  {
    name: "simple-ui",
    entry: "http://localhost:3333",
    container: "#frame",
    activeRule: "/simple-ui",
    props: { data: { router } },
  },
]);

start();
