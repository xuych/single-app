import Home from "@/pages/home/index.vue";
import VueRouter from "vue-router";
const routes = [
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/about/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const childRoute = ["/simple-ui"];
const isChildRoute = (path) => childRoute.some((item) => path.startsWith(item));
const rawAppendChild = HTMLHeadElement.prototype.appendChild;
const rawAddEventListener = window.addEventListener;
router.beforeEach((to, from, next) => {
  // 从子项目跳转到主项目
  // debugger // eslint-disable-line
  if (isChildRoute(from.path) && !isChildRoute(to.path)) {
    HTMLHeadElement.prototype.appendChild = rawAppendChild;
    window.addEventListener = rawAddEventListener;
  }
  next();
});

export default router;
