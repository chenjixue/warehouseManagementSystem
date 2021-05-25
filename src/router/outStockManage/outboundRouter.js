const outboundOrderList = () => import('pages/outboundOrder/outboundOrderList')
const outboundOrderAdd = () => import('pages/outboundOrder/outboundOrderAdd')
const outboundOrderDetail = () => import('pages/outboundOrder/outboundOrder')
const outStockManageUserGuide = () => import('pages/outboundOrder/outStockManageUserGuide')
const saleDeliveryAppealList = ()=>import('pages/groupBusiness/saleDeliveryAppealList');

const outboundRouter = [
    {
        path: "/outboundOrderList",
        name: 'outboundOrderList',
        meta: {
            title:'出库单管理',
            keepalive:true
        },
        title: '出库单管理',
        component: outboundOrderList
    },
    {
        path:'/saleDeliveryAppealList',
        name:'saleDeliveryAppealList',
        meta:{
            title:'销售出库申请单',
            keepalive:true
        },
        title:'销售出库申请单',
        component:saleDeliveryAppealList
    },
    {
        path: "/outboundOrderAdd",
        name: 'outboundOrderAdd',
        meta: {
            title:'新增出库单',
        },
        title: '新增出库单',
        component: outboundOrderAdd
    },
    {
        path: "/outboundOrderDetail",
        name: 'outboundOrderDetail',
        meta: {
            title:'出库单详情',
        },
        title: '出库单详情',
        component: outboundOrderDetail
    },
    // {
    //     path: "/outStockManage",
    //     name:'outStockManage',
    //     meta:{
    //         title:'出库用户指引'
    //     },
    //     title:'出库用户指引',
    //     component:outStockManageUserGuide
    // }
]

export default outboundRouter;