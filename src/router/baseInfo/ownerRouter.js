const ownerList = () => import('pages/productOwner/ownerList')

const ownerRouter = [
    {
        path: "/ownerList",
        name: 'ownerList',
        meta: {
            title:'货主管理',
            keepalive:true
        },
        title: '货主管理',
        component: ownerList
    },
]

export default ownerRouter;