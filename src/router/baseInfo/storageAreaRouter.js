const areaList = () => import('pages/storageArea/storageAreaList')

const storageAreaRouter = [
    {
        path: "/areaList",
        name: 'areaList',
        meta: {
            title:'库区管理',
            keepalive:true
        },
        title: '库区管理',
        component: areaList
    },
]

export default storageAreaRouter;