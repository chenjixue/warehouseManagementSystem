const visualLocationRouter = [
    {
        path: "/locationBuilder",
        name: 'locationBuilder',
        meta: {
            title:'库位设置',
            keepalive:false
        },
        title: '库位设置',
        component: () => import('pages/visualLocation/locationBuilder')
    },
    {
        path: "/locationRemove",
        name: 'locationRemove',
        meta: {
            title:'库位迁移',
            keepalive:false
        },
        title: '库位迁移',
        component: () => import('pages/visualLocation/locationRemove')
    },
    {
        path: "/locationViewer",
        name: 'locationViewer',
        meta: {
            title:'仓库货位平面图',
            keepalive:false
        },
        title: '仓库货位平面图',
        component: () => import('pages/visualLocation/locationViewer')
    },
]

export default visualLocationRouter