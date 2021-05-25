const login = () => import('pages/login/login')
const loginBySSO = () => import('pages/login/loginBySSO')
const register = () => import('pages/login/register')
const changePassword = () => import('pages/login/changePassword')
const authorize = () => import('pages/authorize/authorize')

const loginRouter = [
    {
        path: "/login",
        name: 'login',
        meta: {
            title:'登录'
        },
        title: '登录',
        component: login
    },
    {
        path: "/loginBySSO",
        name: 'loginBySSO',
        meta: {
            title:'SSO登录'
        },
        title: 'SSO登录',
        component: loginBySSO
    },
    {
        path:"/register",
        name:"register",
        meta:{
            title:'注册'
        },
        title:'注册',
        component:register
    },
    {
        path:"/changePassword",
        name:"changePassword",
        meta:{
            title:'忘记密码'
        },
        title:'忘记密码',
        component:changePassword
    },
    {
        path:"/authorize",
        name:"authorize",
        meta:{
            title:'授权'
        },
        title:'授权',
        component:authorize
    },
    {
        path:'/forbiddenAu',
        name:'forbiddenAu',
        title:'无权访问',
        component:()=>import('pages/forbidden/forbidden')
    }
]
export default loginRouter