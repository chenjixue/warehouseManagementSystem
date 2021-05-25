
const transAreaRouter = [
    {
        path: "/areaSetting",
        name: 'areaSetting',
        meta: {
            title:'片区管理',
            keepalive:true
        },
        title: '片区管理',
        component: ()=> import('pages/transAreaManage/areaSettingNew')
    },
    {
        path: "/rangeSetting",
        name: 'rangeSetting',
        meta: {
            title:'配送范围管理',
            keepalive:false
        },
        title: '配送范围管理',
        component: ()=> import('pages/transAreaManage/areaSettingMap')
    },
    {
        path: "/customerSetting",
        name: 'customerSetting',
        meta: {
            title:'客户地址绑定片区',
            keepalive:true
        },
        title: '客户地址绑定片区',
        component: ()=> import('pages/transAreaManage/customerAreaSetting')
    },
    {
        path:'/electricFence',
        name:'electricFence',
        meta:{
            title:'电子围栏',
            keepalive:false
        },
        component:()=>import('pages/transAreaManage/electricFence')
    }
]

export default transAreaRouter;