import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import news from "../views/news";
import member from "../views/member";
import introduction from "../views/club/introduction";
import value from "../views/club/values";
import milestone from "../views/club/milestone";
import creditbot from "../views/services/creditbot";
import lunchon from "../views/services/lunchon";
import etc from "../views/services/etc";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    alias: "/home",
    component: Home,
  },
  {
    path: "/club/introduction",
    component: introduction,
  },
  {
    path: "/club/milestone",
    component: milestone,
  },
  {
    path: "/club/value",
    component: value,
  },
  {
    path: "/services/creditbot",
    component: creditbot,
  },
  {
    path: "/services/lunchon",
    component: lunchon,
  },
  {
    path: "/services/etc",
    component: etc,
  },
  {
    path: "/news",
    component: news,
  },
  {
    path: "/member",
    component: member,
    alias: "/members",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
