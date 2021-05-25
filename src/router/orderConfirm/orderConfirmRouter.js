const inboundOrder = ()=>import("pages/orderConfirm/inboundOrder")
const inboundWaitOrder = ()=>import("pages/orderConfirm/inboundWaitOrder")
const orderSign = ()=>import("pages/orderConfirm/orderSign")

const orderConfirmRouter = [
    {
        path:'/inboundOrder',
        name:'inboundOrder',
        title:'已入库订单',
        meta:{
            title:'已入库订单',
            keepalive:false
        },
        component:inboundOrder
    },
    {
        path:'/inboundWaitOrder',
        name:'inboundWaitOrder',
        title:'待入库',
        meta:{
            title:'待入库',
            keepalive:false
        },
        component:inboundWaitOrder
    },
    {
        path:'/orderSign',
        name:'orderSign',
        title:'订单标记',
        meta:{
            title:'订单标记',
            keepalive:false
        },
        component:orderSign
    }
]

export default orderConfirmRouter