import {createRouter,createWebHistory,RouterOptions,Router,
    RouteRecordRaw,
} from "vue-router"
// @ts-ignore
import Layout from '../layouts/Layout.vue';
const routes: Array<RouteRecordRaw> = [
     {
    path: '/',
       redirect: '/index',
      component: Layout,
      children: [
        {
              path: 'index',
            // @ts-ignore
            component: () => import('../views/Home.vue'),
            name: 'Home'
          },
          {
              path: '/shop_cart',
            // @ts-ignore
            component: () => import('../views/ShopCart.vue'),
            name: 'ShopCart'
        },
        
      ]
    },
    {
      path: "/:catchAll(.*)",
        name: "404",
       // @ts-ignore
      component: () => import("../views/errorPage/404.vue"),
      meta: {
        title: "404",
      },
    }
]

const options: RouterOptions = {
    history: createWebHistory(), 
    routes,
  }
  

const router: Router = createRouter(options);

export default router