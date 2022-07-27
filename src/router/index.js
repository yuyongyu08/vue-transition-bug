import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        // {
        //   path: '',
        //   name: 'index',
        //   redirect: 'demo1',
        // },
        {
          path: 'demo1',
          name: '<transition-group>',
          component: () => import('@/views/Demo1.vue')
        },
        {
          path: 'demo2',
          name: '<transition>: index as key',
          component: () => import('@/views/Demo2.vue')
        },
        {
          path: 'demo3',
          name: '<transition>: item.id as key',
          component: () => import('@/views/Demo3.vue')
        },
        {
          path: 'demo4',
          name: '<transition>: add appear property',
          component: () => import('@/views/Demo4.vue')
        },
      ]
    },
  ]
})

export default router
