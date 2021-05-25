const accountRouter = [
    {
        path: "/accountSetting",
        component: () => import('pages/accountSetting/accountSetting')
    },
    {
        path: "/editAccount",
        component: () => import('pages/accountSetting/addAccount')
    },
    {
        path: "/addAccount",
        component: () => import('pages/accountSetting/addAccount')
    },
    {
        path: "/accountDetail",
        component: () => import('pages/accountSetting/accountDetail')
    },
    {
        path: "/personalSetting",
        component: () => import('pages/setting/personalSetting.vue')
    },
    {
        path: "/linkToPdd",
        component: () => import('pages/authorize/linkToPdd.vue')
    },
    {
        path: "/linkToTB",
        component: () => import('pages/authorize/linkToTB.vue')
    },
]
export default accountRouter