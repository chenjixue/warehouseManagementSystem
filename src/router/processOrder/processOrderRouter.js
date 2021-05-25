const processOrderRouter = [
    {
        path: "/processOrderList",
        name: 'processOrderList',
        meta: {
            title:'加工管理',
            keepalive:true
        },
        title: '加工管理',
        component: () => import('pages/processOrder/processOrderList')
    },
    {
        path: "/processOrderDetail",
        name: 'processOrderDetail',
        meta: {
            title:'加工管理详情',
        },
        title: '加工管理详情',
        component: () => import('pages/processOrder/processOrderDetail')
    },
    {
        path: "/processOrderAdd",
        name: 'processOrderAdd',
        meta: {
            title:'新增加工管理',
        },
        title: '新增加工管理',
        component: () => import('pages/processOrder/processOrderAdd')
    },
]
export default processOrderRouter