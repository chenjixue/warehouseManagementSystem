const convertOrderRouter = [
    {
        path: "/convertOrderList",
        name: 'convertOrderList',
        meta: {
            title:'库存转移',
            keepalive:true
        },
        title: '库存转移',
        component: () => import('pages/convertOrder/convertOrderList')
    },
    {
        path: "/convertOrderDetail",
        name: 'convertOrderDetail',
        meta: {
            title:'编辑库存转移',
        },
        title: '编辑库存转移',
        component: () => import('pages/convertOrder/convertOrderDetail')
    },
    {
        path: "/convertOrderAdd",
        name: 'convertOrderAdd',
        meta: {
            title:'新增库存转移',
        },
        title: '新增库存转移',
        component: () => import('pages/convertOrder/convertOrderAdd')
    },
]
export default convertOrderRouter