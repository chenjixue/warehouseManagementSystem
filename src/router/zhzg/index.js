import Vue from 'vue'
import Router from 'vue-router'

import loginRouter from './loginModule'
import homeRouter from './homeModule'
import inboundApplyRouter from './inboundApply'
import setting from './setting'

Vue.use(Router)



const router = new Router({
    // mode : 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        ...loginRouter,
        ...homeRouter,
        ...inboundApplyRouter,
        ...setting
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login'||to.path === '/changePassword') {
        next();
    } else {
        let userName = sessionStorage.getItem('userName');
        if (!userName) {
            next('/login');
        } else {
            next();
        }
    }
});

export default router;