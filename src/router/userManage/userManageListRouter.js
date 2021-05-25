const userManageList = () => import('pages/userManage/userManageList')

const userManageListRouter = [
    {
        path: "/userManageList",
        name: 'userManageList',
        meta: {
            title:'用户管理',
            keepalive:true
        },
        title: '用户管理',
        component: userManageList
    },
]

export default userManageListRouter;