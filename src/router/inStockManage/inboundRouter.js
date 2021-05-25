const inboundApplyList = () => import('pages/inboundApply/inboundApplyList')
const inboundApplyAdd = () => import('pages/inboundApply/inboundApplyAdd')
const inboundApplyDetail = () => import('pages/inboundApply/inboundApplyDetail')

const inboundOrderList = () => import('pages/inboundOrder/inboundOrderList')
const inboundOrderAdd = () => import('pages/inboundOrder/inboundOrderAdd')
const inboundOrderDetail = () => import('pages/inboundOrder/inboundOrderDetail')

const advancedInboundList = () => import('pages/inboundApply/advancedInboundList')


const inboundRouter = [
    {
        path: "/inboundApplyList",
        name: 'inboundApplyList',
        meta: {
            title:'入库申请单管理',
            keepalive:true
        },
        title: '入库申请单管理',
        component: inboundApplyList
    },
    {
        path: "/inboundApplyAdd",
        name: 'inboundApplyAdd',
        meta: {
            title:'新增入库申请单',
        },
        title: '新增入库申请单',
        component: inboundApplyAdd
    },
    {
        path: "/inboundApplyDetail",
        name: 'inboundApplyDetail',
        meta: {
            title:'入库申请单详情',
        },
        title: '入库申请单详情',
        component: inboundApplyDetail
    },
    {
        path: "/inboundOrderList",
        name: 'inboundOrderList',
        meta: {
            title:'入库单管理',
            keepalive:true
        },
        title: '入库单管理',
        component: inboundOrderList
    },
    {
        path: "/inboundOrderAdd",
        name: 'inboundOrderAdd',
        meta: {
            title:'新增入库单',
        },
        title: '新增入库单',
        component: inboundOrderAdd
    },
    {
        path: "/inboundOrderDetail",
        name: 'inboundOrderDetail',
        meta: {
            title:'入库单详情',
        },
        title: '入库单详情',
        component: inboundOrderDetail
    },
    {
        path: "/advancedInboundList",
        name: "advancedInboundList",
        meta: {
            title:'入库预约单',
            keepalive:true
        },
        title:'入库预约单',
        component: advancedInboundList
    },
    {
        path: "/advancedInboundAdd",
        name: "advancedInboundAdd",
        meta: {
            title:'新增入库预约单',
        },
        title:'新增入库预约单',
        component: () => import('pages/inboundApply/advancedInboundAdd')
    },
    {
        path: "/advancedInboundDetail",
        name: "advancedInboundDetail",
        meta: {
            title:'入库预约单详情',
        },
        title:'入库预约单详情',
        component: () => import('pages/inboundApply/advancedInboundDetail')
    },
    {
        path: "/qualityTestInboundList",
        name: "qualityTestInboundList",
        meta: {
            title:'质检列表',
        },
        title:'质检列表',
        component: () => import('pages/inboundApply/qualityTestInboundList')
    },
    {
        path: "/productCheck",
        name: "productCheck",
        meta: {
            title:'产品质检',
        },
        title:'产品质检',
        component: () => import('pages/inboundApply/productCheck')
    },
    {
        path: '/returnOrderList',
        name: 'returnOrderList',
        meta: {
            title:'销售退货单',
        },
        title: '销售退货单',
        component: () => import('pages/inboundApply/returnOrder')
    },
    {
        path: '/addReturnOrder',
        name: 'addReturnOrder',
        meta: {
            title:'新增销售退货单',
        },
        title: '新增销售退货单',
        component: () => import('pages/inboundApply/addReturnOrder')
    }
    // productCheck
    // {
    //     path:'/inStockManage',
    //     name:'inStockManage',
    //     meta:{
    //         title:'入库用户指引'
    //     },
    //     title:'入库用户指引',
    //     component:inStockManageUserGuide,
    // }
]

export default inboundRouter;