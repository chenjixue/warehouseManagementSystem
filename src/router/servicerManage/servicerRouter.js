const servicerRouter = [
    {
        path: "/servicerManage",
        name: 'servicerManage',
        meta: {
            title:'服务商管理',
            keepalive:true
        },
        title: '服务商管理',
        component: () => import('pages/servicerManage/servicerManage')
    },
    {
        path: "/addServicerManage",
        name: 'addServicerManage',
        meta: {
            title:'新增服务商',
        },
        title: '新增服务商',
        component: () => import('pages/servicerManage/addServicerManage')
    },
    {
        path: "/servicerManageDetail",
        name: 'servicerManageDetail',
        meta: {
            title:'服务商明细',
            keepalive:true
        },
        title: '服务商明细',
        component: () => import('pages/servicerManage/servicerManageDetail')
    },
]
export default servicerRouter