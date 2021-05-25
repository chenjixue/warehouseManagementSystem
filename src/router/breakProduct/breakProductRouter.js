const breakProductRouter = [
    {
        path:'/breakProduct',
        name:'breakProduct',
        meta: {
            title:'残次品管理',
            keepalive:false
        },
        title: '残次品管理',
        component:()=>import('pages/breakProductManage/breakProduct')
    }
]

export default breakProductRouter