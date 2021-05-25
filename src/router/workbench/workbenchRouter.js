const workbenchRouter = [
    {
        path: "/myWorkbench",
        name: 'myWorkbench',
        meta: {
            title: '我的工作台',
            keepalive: true
        },
        title: '我的工作台',
        component: () => import('pages/workbench/myWorkbench')
    },
    {
        path:'/manageState',
        name:'manageState',
        meta:{
            title:'我的工作状态',
            keepalive:false
        },
        title:'我的工作状态',
        component: () => import('pages/workbench/manageState')
    },
    {
        path:'/monitoringPage',
        name:'monitoringPage',
        meta:{
            title:'监控平台',
            keepalive:false
        },
        title:'监控平台',
        component: () => import('pages/monitoringBench/monitoringPage')
    },
    {
        path:'/monitoringPageNew',
        name:'monitoringPageNew',
        meta:{
            title:'监控平台',
            keepalive:false
        },
        title:'监控平台',
        component: () => import('pages/monitoringBench/monitoringPageNew')
    }
]
export default workbenchRouter