const putawayOrderList = () => import('pages/putawayOrder/putawayOrderList')
const putawayOrderDetail = () => import('pages/putawayOrder/putawayOrder')
const putawayTaskList = () => import('pages/putawayTask/putawayTaskList')
const putawayTaskDetail = () => import('pages/putawayTask/putawayTask')

const putawayRouter = [
    {
        path: "/putawayOrderList",
        name: 'putawayOrderList',
        meta: {
            title:'上架单管理',
            keepalive:true
        },
        title: '上架单管理',
        component: putawayOrderList
    },
    {
        path: "/putawayOrderDetail",
        name: 'putawayOrderDetail',
        meta: {
            title:'上架单详情',
            keepalive:true
        },
        title: '上架单详情',
        component: putawayOrderDetail
    },
    {
        path: "/putawayTaskList",
        name: 'putawayTaskList',
        meta: {
            title:'上架任务列表',
            keepalive:true
        },
        title: '上架任务列表',
        component: putawayTaskList
    },
    {
        path: "/putawayTaskDetail",
        name: 'putawayTaskDetail',
        meta: {
            title:'上架任务详情',
        },
        title: '上架单详情',
        component: putawayTaskDetail
    },
]

export default putawayRouter;