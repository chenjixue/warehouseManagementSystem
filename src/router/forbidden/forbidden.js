const forbidden = [
    {
        path:'/forbidden',
        name:'forbidden',
        title:'无权访问',
        component:()=>import('pages/forbidden/forbidden')
    }
]

export default forbidden