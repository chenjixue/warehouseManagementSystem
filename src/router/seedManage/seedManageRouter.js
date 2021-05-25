const seedList = () => import('pages/seedManage/seedList')
const seedTaskDetail = () => import('pages/seedManage/seedTaskDetail')


const seedRouter = [
    {
        path: "/seedList",
        name: 'seedList',
        meta: {
            title:'播种列表',
            keepalive:true
        },
        title: '播种列表',
        component: seedList
    },
    {
        path: "/seedTaskDetail",
        name: 'seedTaskDetail',
        meta: {
            title:'播种详情',
        },
        title: '播种详情',
        component: seedTaskDetail
    },

]

export default seedRouter;