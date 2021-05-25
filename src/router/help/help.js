const help = [
    {
        path: '/quickStart',
        name:'quickStart',
        meta:{
            title:'快速上手'
        },
        title:'快速上手',
        component: () => import('pages/help/quickStart')
    },
    {
        path:'/operationManual',
        name:'operationManual',
        meta:{
            title:'操作手册'
        },
        title:'操作手册',
        component: () => import('pages/help/operationManual')
    },
    {
        path:'/videoTraining',
        name:'videoTraining',
        meta:{
            title:'视频培训'
        },
        title:'视频培训',
        component: () => import('pages/help/videoTraining')
    }
]

export default help