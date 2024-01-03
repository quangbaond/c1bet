import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

/** @type {import('vue-router').RouterOptions['routes']} */
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: import("@/views/mobile/Home.vue"),
    meta: {
      layout: "default"
    }
  },
  {
    path: "/login",
    component: import("@/views/mobile/Login.vue"),
    meta: {
      layout: "blank"
    }
  },
  {
    path: "/register",
    component: import("@/views/mobile/Register.vue"),
    meta: {
      layout: "blank"
    }
  },
  // {
  //   path: "/profile",
  //   component: import("@/views/mobile/Profile.vue"),
  //   meta: {
  //     layout: "default"
  //   }
  // },
  {
    path: "/404",
    component: import("@/views/All.vue"),
    meta: {
      layout: "blank"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    meta: {
      layout: "blank"
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeResolve((to, from, next) => {
  next();
});

export default router;
