
const transferOrderRouter = [
    {
        path: "/transferOrderList",
        name: 'transferOrderList',
        meta: {
            title:'调拨单管理',
            keepalive:false
        },
        title: '调拨单管理',
        component: ()=> import('pages/transferOrderManage/transferOrderList')
    },
    {
        path: "/addTransferOrder",
        name: 'addTransferOrder',
        meta: {
            title:'新增调拨单',
            keepalive:false
        },
        title: '新增调拨单',
        component: ()=> import('pages/transferOrderManage/addTransferOrder')
    },
    {
        path: "/transferOrderDetail",
        name: 'transferOrderDetail',
        meta: {
            title:'调拨单详情',
            keepalive:false
        },
        title: '调拨单详情',
        component: ()=> import('pages/transferOrderManage/transferOrderDetail')
    },
    {
        path: "/wrongTransferOrderList",
        name: 'wrongTransferOrderList',
        meta: {
            title:'异常调拨单',
            keepalive:false
        },
        title: '异常调拨单',
        component: ()=> import('pages/transferOrderManage/wrongTransferOrderList')
    },
]

export default transferOrderRouter;