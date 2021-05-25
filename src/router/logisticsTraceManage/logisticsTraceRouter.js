const logisticsTraceRouter = [
    {
        path:'/logisticsTrace',
        name:'logisticsTrace',
        title:'物流跟踪',
        meta: {
            title:'物流跟踪',
            keepalive:true
        },
        component:() => import('pages/logisticsManage/logisticsTrace')
    },
    {
        path:'/driverDynamic',
        name:'driverDynamic',
        title:'司机动态',
        meta: {
            title:'司机动态',
            keepalive:false
        },
        component:() => import('pages/logisticsManage/driverDynamic')
    }
]

export default logisticsTraceRouter