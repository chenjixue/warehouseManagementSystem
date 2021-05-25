
const singlePageRouter = [
    {
        path: "/seedWorkbench",
        name: 'seedWorkbench',
        meta: {
            title:'播种分拣',
            windowOpen:true
        },
        title: '播种分拣',
        component: () => import('pages/seedManage/seedWorkbench')
    },
    {
        path: "/seedCheck",
        name: 'seedCheck',
        meta: {
            title:'任务复核',
            windowOpen:true
        },
        title: '任务复核',
        component: () => import('pages/seedManage/checkWorkbench')
    },
    {
        path: "/templateSetting",
        name: 'templateSetting',
        meta: {
            title:'打印模板设置',
        },
        title: '打印模板设置',
        component: () => import('pages/printModule/templateSetting')
    },
    {
        path:'/orderGroup',
        name:'orderGroup',
        meta:{
            title:'智能分单'
        },
        title:'智能分单',
        component:() => import('components/businessComp/OrderGroup')
    },
    {
        path:'/transRouter',
        name:'transRouter',
        meta:{
            title:'路线规划'
        },
        title:'路线规划',
        component:() => import('components/businessComp/TransRouter')
    },
    {
        path:'/changeTransOrder',
        name:'changeTransOrder',
        meta:{
            title:'调整配送顺序'
        },
        title:'调整配送顺序',
        component:() => import('components/businessComp/ChangeTransOrder')
    },
    {
        path:'/driverDetail',
        name:'driverDetail',
        meta:{
            title:'司机动态详情',
            keepalive:false
        },
        component:()=>import('components/businessComp/driverDetail')
    },
    {
        path: "/seedCheckNew",
        name: 'seedCheckNew',
        meta: {
            title:'订单复核',
            windowOpen:true
        },
        title: '订单复核',
        component: () => import('pages/seedManage/seedCheckNew')
    },
    {
        path:'/autoPrintOrder',
        name:'autoPrintOrder',
        meta:{
            title:'打印订单',
            windowOpen:true
        },
        title:'打印订单',
        component:()=>import('pages/orderManage/autoPrintOrder')
    },
    {
        path:'/surveillancePage',
        name:'surveillancePage',
        meta:{
            title:'监控中心',
            windowOpen:true
        },
        title:'监控中心',
        component:()=>import('pages/videoSurveillance/surveillancePage')
    }
]

export default singlePageRouter