import Vue from "vue"; 
import Router from "vue-router";

Vue.use(Router);

export default new Router({ 
  routes: [
    {
      path: "/",
      component: () => import("@/views/Header"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/Home")
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/About")
        } ,
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("@/views/Contacts")
        }
      ],
    }
  ],
});

