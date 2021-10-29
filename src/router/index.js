import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Shop = () => import("views/shop/Shop");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");

Vue.use(VueRouter);

//修改路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail/:id",
    component: Detail
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
