const erpConfigRouter = [
    {
        path:'/erpConfig',
        name:'erpConfig',
        meta:{
            title:'ERP数据集成配置',
            keepalive:true
        },
        title:'ERP数据集成配置',
        component:()=>import('pages/integrateConfig/erpConfig')
    },
]

export default erpConfigRouter