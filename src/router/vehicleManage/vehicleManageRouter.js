const vehicleManageRouter = [
    {
        path:'/vehicleList',
        name:'vehicleList',
        meta:{
            title:'车辆管理',
            keepalive:true
        },
        title:'车辆管理',
        component:()=>import('pages/vehicleManage/vehicleList')
    },
]

export default vehicleManageRouter