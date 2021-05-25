const surveillanceRouter = [
    {
        path:'/warehouseSurveillance',
        name:'warehouseSurveillance',
        meta:{
            title:'仓库监控',
            keepalive:false
        },
        title:'仓库监控',
        component:()=>import('pages/videoSurveillance/warehouseSurveillance')
    },
    {
        path:'/equipmentList',
        name:'equipmentList',
        meta:{
            title:'设备列表',
            keepalive:false
        },
        title:'设备列表',
        component:()=>import('pages/videoSurveillance/equipmentList')
    }
]

export default surveillanceRouter