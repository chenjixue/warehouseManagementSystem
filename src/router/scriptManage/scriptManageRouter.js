const scriptManageRouter = [
    {
        path: "/taskSqlList",
        name: 'taskSqlList',
        meta: {
            title:'sql任务列表',
        },
        title: 'sql任务列表',
        component: ()=>import('pages/scriptManage/taskSqlList')
    },
    {
        path: "/taskGroupList",
        name: 'taskGroupList',
        meta: {
            title:'分组任务列表',
        },
        title: '分组任务列表',
        component: ()=>import('pages/scriptManage/taskGroupList')
    },
    {
        path: "/indicatorList",
        name: 'indicatorList',
        meta: {
            title:'指标列表',
        },
        title: '指标列表',
        component: ()=>import('pages/scriptManage/indicatorList')
    },
    {
        path: "/AppkeyList",
        name: 'AppkeyList',
        meta: {
            title:'Appkey列表',
        },
        title: 'Appkey列表',
        component: ()=>import('pages/scriptManage/AppkeyList')
    },
    {
        path: "/accessPlatList",
        name: 'accessPlatList',
        meta: {
            title:'开放平台列表',
        },
        title: '开放平台列表',
        component: ()=>import('pages/scriptManage/accessPlatList')
    },
    {
        path: "/customEventList",
        name: 'customEventList',
        meta: {
            title:'通用事件列表',
        },
        title: '通用事件列表',
        component: ()=>import('pages/scriptManage/customEventList')
    },
]

export default scriptManageRouter;