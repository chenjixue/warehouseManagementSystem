const warehouseRouter = [
    {
        path: "/warehouseMessageManage",
        name: 'warehouseMessageManage',
        meta: {
            title:'仓库信息管理',
            keepalive:true
        },
        title: '仓库信息管理',
        component: () => import('pages/warehouse/warehouseMessageManage')
    },
    {
        path: "/warehouseMessageAdd",
        name: 'warehouseMessageAdd',
        meta: {
            title:'新增仓库',
        },
        title: '新增仓库',
        component: () => import('pages/warehouse/warehouseMessageAdd')
    },
    {
        path: "/warehouseMessageDetail",
        name: 'warehouseMessageDetail',
        meta: {
            title:'仓库明细',
            keepalive:true
        },
        title: '仓库明细',
        component: () => import('pages/warehouse/warehouseMessageDetail')
    },
    {
        path: "/warehouseList",
        name: 'warehouseList',
        meta: {
            title:'仓库列表',
            keepalive:false
        },
        title: '仓库列表',
        component: () => import('pages/warehouse/warehouseList')
    },
    {
        path: "/warehouseDetail",
        name: 'warehouseDetail',
        meta: {
            title:'仓库详情',
        },
        title: '仓库详情',
        component: () => import('pages/warehouse/warehouseDetail')
    },
    // {
    //     path:'/warehousePerformance',
    //     name:'warehousePerformance',
    //     meta:{
    //         title:'仓库绩效',
    //         keepalive:false,
    //     },
    //     title:'仓库绩效',
    //     component:()=>import('pages/warehouse/warehousePerformance')
    // },
    {
        path:'/allotRegulation',
        name:'allotRegulation',
        meta:{
            title:'内配关系设置',
            keepalive:false,
        },
        title:'内配关系设置',
        component:()=>import('pages/warehouse/allotRegulation')
    },
    {
        path:'/warehouseOrderRelation',
        name:'warehouseOrderRelation',
        meta:{
            title:'仓库订单配置',
            keepalive:false,
        },
        title:'仓库订单配置',
        component:()=>import('pages/warehouse/warehouseOrderRelation')
    },
    {
        path:'/addRelation',
        name:'addRelation',
        meta:{
            title:'添加配置',
            keepalive:false,
        },
        title:'添加配置',
        component:()=>import('pages/warehouse/addRelation')
    },
    {
        path:'/routeConfig',
        name:'routeConfig',
        meta:{
            title:'路线配置',
            keepalive:false,
        },
        title:'路线配置',
        component:()=>import('pages/warehouse/routeConfig')
    },
    {
        path:'/warehouseStoreList',
        name:'warehouseStoreList',
        meta:{
            title:'仓库库存',
            keepalive:true,
        },
        title:'仓库库存',
        component:()=>import('pages/warehouse/warehouseStoreList')
    },
    {
        path:'/warehouseStoreDetail',
        name:'warehouseStoreDetail',
        meta:{
            title:'货位库存',
            keepalive:false,
        },
        title:'货位库存',
        component:()=>import('pages/warehouse/warehouseStoreDetail')
    },
    {
        path:'/warehouseStoreReport',
        name:'warehouseStoreReport',
        meta:{
            title:'仓库变更明细',
            keepalive:false,
        },
        title:'仓库变更明细',
        component:()=>import('pages/warehouse/warehouseStoreReport')
    },

]
export default warehouseRouter