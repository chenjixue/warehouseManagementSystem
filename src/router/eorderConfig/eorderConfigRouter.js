const eorderConfigRouter = [
    {
        path:'/eorderList',
        name:'eorderList',
        meta:{
            title:'电子面单配置',
            keepalive:true
        },
        title:'电子面单配置',
        component:()=>import('pages/eorderConfig/eorderList')
    },
    {
        path:'/eorderGiude',
        name:'eorderGiude',
        meta:{
            title:'电子面单配置引导',
            keepalive:false
        },
        title:'电子面单配置引导',
        component:()=>import('pages/eorderConfig/eorderGuide')
    },
]

export default eorderConfigRouter