const login = () => import('pages/zhzg/login/Login.vue')

const loginRouter = [
    {
        path: "/login",
        name: 'login',
        meta: {
            title:'登录'
        },
        title: '登录',
        component: login
    }]

export default loginRouter