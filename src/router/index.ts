import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/index/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        children: [
            {
                path: '/',
                component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
    },
    {
        path: '/404',
        name: '404',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/error/404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && to.name == 'islogin') { next({ name: 'Login' }) } else { next() }
})
// 全局解析守卫
router.beforeResolve(async to => {
    if (to.meta.requiresCamera) {
        try {
            // await askForCameraPermission()
        } catch (error) {
            // if (error instanceof NotAllowedError) {
            //     // ... 处理错误，然后取消导航
            //     return false
            // } else {
            //     // 意料之外的错误，取消导航并把错误传给全局处理器
            //     throw error
            // }
        }
    }
})
// 全局后置钩子
router.afterEach((to, from, failure) => {
    if (!failure) {
        // sendToAnalytics(to.fullPath)
    }
})

export default router
