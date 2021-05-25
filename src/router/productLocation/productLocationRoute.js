const productLocationRoute = [
    {
        path:'/productLocation',
        name:'productLocation',
        meta:{
            title:'产品货位设置',
            keepalive:false
        },
        title:'产品货位设置',
        component:()=>import('pages/productLocation/productLocationList.vue')
    }
]

export default productLocationRoute