const inventoryCheckList = () => import('pages/inventoryCheck/inventoryCheckList')

const inventoryCheckRouter = [
    {
        path: "/checkList",
        name: 'checkList',
        meta: {
            title:'盘点单列表',
            keepalive:true
        },
        title: '盘点单列表',
        component: inventoryCheckList
    },
    {
        path: "/checkDetail",
        name: 'checkDetail',
        meta: {
            title:'盘点单详情',
            keepalive:false
        },
        title: '盘点单详情',
        component: () => import('pages/inventoryCheck/inventoryDetail')
    },
    {
        path: "/inventoryCheckAdd",
        name: 'inventoryCheckAdd',
        meta: {
            title:'新建盘点单',
            keepalive:false
        },
        title: '新建盘点单',
        component: () => import('pages/inventoryCheck/inventoryCheckAdd')
    },
    // {
    //     path:'/inventoryCheck',
    //     name:'inventoryCheck',
    //     meta:{
    //         title:'盘点用户指引'
    //     },
    //     title:'盘点用户指引',
    //     component: () => import('pages/inventoryCheck/inventoryUserGuide')
    // }
]

export default inventoryCheckRouter;