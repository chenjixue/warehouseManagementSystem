const inventoryOutboundList = () => import('pages/inventoryInOrOutbound/inventoryOutboundList')
const inventoryInboundList = () => import('pages/inventoryInOrOutbound/inventoryInboundList')

const inventoryOutboundListRouter = [
    {
        path: "/inventoryOutboundList",
        name: 'inventoryOutboundList',
        meta: {
            title:'盘亏出库',
            keepalive:true
        },
        title: '盘亏出库',
        component: inventoryOutboundList
    },
    {
        path: "/inventoryInboundList",
        name: 'inventoryInboundList',
        meta: {
            title:'盘盈入库',
            keepalive:true
        },
        title: '盘盈入库',
        component: inventoryInboundList
    }
]

export default inventoryOutboundListRouter;