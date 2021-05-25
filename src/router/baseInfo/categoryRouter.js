const categoryList = () => import('pages/category/categoryList')

const categoryRouter = [
    {
        path: "/categoryList",
        name: 'categoryList',
        meta: {
            title:'类目管理',
            keepalive:true
        },
        title: '类目管理',
        component: categoryList
    },
]

export default categoryRouter;