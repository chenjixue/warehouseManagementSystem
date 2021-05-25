const storeReportManager = () => import('pages/storeReportManager/storeReportManager')
const warehouseReportManager = () => import('pages/storeReportManager/warehouseReportManager')

const storeReportRouter = [
    // {
    //     path: "/storeReportManager",
    //     name: 'storeReportManager',
    //     meta: {
    //         title:'库存报表',
    //         keepalive:false
    //     },
    //     title: '库存报表',
    //     component: storeReportManager
    // },
    {
        path: "/storeReportManager/:id",
        name: 'storeReportManager',
        meta: {
            title:'库存报表',
            keepalive:false
        },
        title: '库存报表',
        component: storeReportManager
    },
    {
        path: "/warehouseReportManager",
        name: 'warehouseReportManager',
        meta: {
            title:'仓配实时报表',
            keepalive:false
        },
        title: '仓配实时报表',
        component: warehouseReportManager
    },
    {
        path:'/warehousePerformance',
        name:'warehousePerformance',
        meta:{
            title:'仓库绩效',
            keepalive:false,
        },
        title:'仓库绩效',
        component:()=>import('pages/warehouse/warehousePerformance')
    },
]
export default storeReportRouter