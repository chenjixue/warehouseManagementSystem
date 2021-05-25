const sortPickRouter = [
    {
        path: "/sortGroupPickList",
        name: 'sortGroupPickList',
        meta: {
            title:'分区拣货',
            keepalive:true
        },
        title: '分区拣货',
        component: () => import('pages/sortGroupPick/sortGroupPickList')
    },
    {
        path: "/sortGroupPickDetail",
        name: 'sortGroupPickDetail',
        meta: {
            title:'编辑分区',
        },
        title: '编辑分区',
        component: () => import('pages/sortGroupPick/sortGroupPickDetail')
    },
]
export default sortPickRouter