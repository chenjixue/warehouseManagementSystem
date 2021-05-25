const partnerList = () => import('pages/tradePartner/partnerList')
const workConfig = () => import('pages/tradePartner/workConfig')

const partnerRouter = [
    {
        path: "/partnerList",
        name: 'partnerList',
        meta: {
            title:'货主管理',
            keepalive:true
        },
        title: '贸易伙伴管理',
        component: partnerList
    },
    {
        path: "/workConfig",
        name: 'workConfig',
        meta: {
            title:'作业设置',
            keepalive:false
        },
        title: '作业设置',
        component: workConfig
    },
]

export default partnerRouter;