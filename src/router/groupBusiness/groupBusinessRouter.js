const groupOrderList = () => import('pages/groupBusiness/groupOrderList');
const groupInboundList = () => import('pages/groupBusiness/groupInboundList');
const groupOrderDetail = () => import('pages/groupBusiness/groupOrderDetail');
const groupBillList = () => import('pages/groupBusiness/groupBillList');
const salePlanManage = () => import('pages/groupBusiness/salePlanManage');
const groupStoreControl = () => import('pages/groupBusiness/groupStoreControl');
const groupBillDetail = () => import('pages/groupBusiness/groupBillDetail');
const groupOutStockList = () => import('pages/groupBusiness/groupOutStockList');
const groupOutStockAdd = () => import('pages/groupBusiness/groupOutStockAdd');
const groupCarryOrderList = () => import('pages/groupBusiness/groupCarryOrderList');
const groupCarryOrderAdd = () => import('pages/groupBusiness/groupCarryOrderAdd');
const groupSettleOrderList = () => import('pages/groupBusiness/groupSettleOrderList');
const groupSettleOrderAdd = () => import('pages/groupBusiness/groupSettleOrderAdd');
const groupQueryRelevanceTable = ()=>import('pages/groupBusiness/groupQueryRelevanceTable');

const groupBusinessRouter = [
    {
        path: "/groupOrderList",
        name: 'groupOrderList',
        meta: {
            title:'拼团订单管理',
            keepalive:false
        },
        title: '拼团订单管理',
        component: groupOrderList
    },
    {
        path: "/groupInboundList",
        name: 'groupInboundList',
        meta: {
            title:'拼团入库管理',
            keepalive:false
        },
        title: '拼团入库管理',
        component: groupInboundList
    },
    {
        path: "/groupOrderDetail",
        name: 'groupOrderDetail',
        meta: {
            title:'订单详情',
            keepalive:false
        },
        title: '订单详情',
        component: groupOrderDetail
    },
    {
        path:'/groupBillList',
        name:'groupBillList',
        meta:{
            title:'拼团账单管理',
            keepalive:true
        },
        title:'拼团账单管理',
        component:groupBillList
    },
    {
        path:'/groupQueryRelevanceTable',
        name:'groupQueryRelevanceTable',
        meta:{
            title:'团购关联产品管理',
            keepalive:true
        },
        title:'团购关联产品管理',
        component:groupQueryRelevanceTable
    },
    {
        path:'/salePlanManage',
        name:'salePlanManage',
        meta:{
            title:'销售排期管理',
            keepalive:true
        },
        title:'销售排期管理',
        component:salePlanManage
    },
    {
        path:'/groupStoreControl',
        name:'groupStoreControl',
        meta:{
            title:'拼团库存监控',
            keepalive:false
        },
        title:'拼团库存监控',
        component:groupStoreControl
    },
    {
        path:'/groupBillDetail',
        name:'groupBillDetail',
        meta:{
            title:'拼团账单详情',
            keepalive:false
        },
        title:'拼团账单详情',
        component:groupBillDetail
    },
    {
        path: '/groupOutStockList',
        name: 'groupOutStockList',
        meta: {
            title: '销售出库单',
            keepalive: true
        },
        title: '销售出库单',
        component: groupOutStockList
    },
    {
        path: '/groupOutStockAdd',
        name: 'groupOutStockAdd',
        meta: {
            title: '新建出库单',
            keepalive: false
        },
        title: '新建出库单',
        component: groupOutStockAdd
    },
    {
        path: '/groupCarryOrderList',
        name: 'groupCarryOrderList',
        meta: {
            title: '结转单',
            keepalive: true
        },
        title: '结转单',
        component: groupCarryOrderList
    },
    {
        path: '/groupSettleOrderList',
        name: 'groupSettleOrderList',
        meta: {
            title: '结算单',
            keepalive: false
        },
        title: '结算单',
        component: groupSettleOrderList
    },
    {
        path: '/groupSettleOrderAdd',
        name: 'groupSettleOrderAdd',
        meta: {
            title: '拼团销售结算',
            keepalive: false
        },
        title: '拼团销售结算',
        component: groupSettleOrderAdd
    },
    {
        path: '/groupCarryOrderAdd',
        name: 'groupCarryOrderAdd',
        meta: {
            title: '拼团销售结转',
            keepalive: false
        },
        title: '拼团销售结转',
        component: groupCarryOrderAdd
    },
];

export default groupBusinessRouter;