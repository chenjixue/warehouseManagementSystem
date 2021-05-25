const chargeOffOrderList = () => import('pages/businessCheck/chargeOffOrderList')

const businessCheckRouter = [
    {
        path: "/chargeOffOrderList",
        name: 'chargeOffOrderList',
        meta: {
            title:'冲销单据审核',
            keepalive:false
        },
        title: '冲销单据审核',
        component: chargeOffOrderList
    },
]

export default businessCheckRouter;