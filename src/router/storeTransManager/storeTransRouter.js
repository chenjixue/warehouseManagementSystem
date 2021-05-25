const storeTransRouter = [
    {
        path: "/storeTransManagerList",
        name: 'storeTransManagerList',
        meta: {
            title:'移库管理',
            keepalive:true
        },
        title: '移库管理',
        component: () => import('pages/storeTransManager/storeTransManagerList')
    },
    {
        path: "/storeTransManagerDetail",
        name: 'storeTransManagerDetail',
        meta: {
            title:'编辑移库单',
        },
        title: '编辑移库单',
        component: () => import('pages/storeTransManager/storeTransManagerDetail')
    },
    {
        path: "/storeTransManagerAdd",
        name: 'storeTransManagerAdd',
        meta: {
            title:'新增移库单',
        },
        title: '新增移库单',
        component: () => import('pages/storeTransManager/storeTransManagerAdd')
    },
]
export default storeTransRouter