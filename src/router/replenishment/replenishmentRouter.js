const replenishmentList = () => import('pages/replenishment/replenishmentList')

const replenishmentRouter = [
    {
        path: "/replenishmentList",
        name: 'replenishmentList',
        meta: {
            title:'补货任务列表',
            keepalive:true
        },
        title: '补货任务列表',
        component: replenishmentList
    },
]

export default replenishmentRouter;