const sortPickRouter = [
    {
        path: "/sortGroupRepenishList",
        name: 'sortGroupRepenishList',
        meta: {
            title:'分区补货',
            keepalive:true
        },
        title: '分区补货',
        component: () => import('pages/sortGroupReplenish/sortGroupRepenishList')
    },
    {
        path: "/sortGroupRePlenishDetail",
        name: 'sortGroupRePlenishDetail',
        meta: {
            title:'编辑补货分区',
        },
        title: '编辑补货分区',
        component: () => import('pages/sortGroupReplenish/sortGroupRePlenishDetail')
    },
]
export default sortPickRouter