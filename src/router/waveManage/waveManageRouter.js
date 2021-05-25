const waitOrderList = () => import('pages/waveManage/outboundWaitList')
const pickTaskWaitList = () => import('pages/waveManage/pickTaskWaitList')
const waveList = () => import('pages/waveManage/waveList')
const waveDetail = () => import('pages/waveManage/waveDetail')
const pickTaskList = () => import('pages/waveManage/pickTaskList')
const pickTaskDetail = () => import('pages/waveManage/pickTaskDetail')
const confirmPickTask = () => import('pages/waveManage/confirmPickTask')
const confirmOutList = () => import('pages/waveManage/confirmOutList')
const confirmCreateWare = () => import('pages/waveManage/confirmCreateWare')

const waveRouter = [
    {
        path: "/outboundWaitList",
        name: 'outboundWaitList',
        meta: {
            title:'待出库订单',
            keepalive:true
        },
        title: '待出库订单',
        component: waitOrderList
    },
    {
        path: "/waveList",
        name: 'waveList',
        meta: {
            title:'波次列表',
            keepalive:true
        },
        title: '波次列表',
        component: waveList
    },
    {
        path: "/waveDetail",
        name: 'waveDetail',
        meta: {
            title:'波次详情',
        },
        title: '波次详情',
        component: waveDetail
    },
    {
        path: "/pickTaskList",
        name: 'pickTaskList',
        meta: {
            title:'拣货任务管理',
            keepalive:true
        },
        title: '拣货任务管理',
        component: pickTaskList
    },
    {
        path: "/pickTaskDetail",
        name: 'pickTaskDetail',
        meta: {
            title:'拣货任务详情',
        },
        title: '拣货任务详情',
        component: pickTaskDetail
    },
    {
        path: "/confirmPickTask",
        name: 'confirmPickTask',
        meta: {
            title:'完成拣货',
        },
        title: '完成拣货',
        component: confirmPickTask
    },
    {
        path: "/pickTaskWaitList",
        name: 'pickTaskWaitList',
        meta: {
            title:'待拣货订单',
            keepalive:true
        },
        title: '待拣货订单',
        component: pickTaskWaitList
    },
    {
        path: "/confirmOutList",
        name: 'confirmOutList',
        meta: {
            title:'扫单出库',
        },
        title: '扫单出库',
        component: confirmOutList
    },
    {
        path: "/confirmCreateWare",
        name: 'confirmCreateWare',
        meta: {
            title:'扫单创建波次',
        },
        title: '扫单创建波次',
        component: confirmCreateWare
    }
]

export default waveRouter;