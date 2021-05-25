const salesAreaRouter = [
    {
        path: "/salesAreaList",
        name: 'salesAreaList',
        meta: {
            title:'设置销售范围',
            keepalive:true
        },
        title: '销售范围设置列表',
        component: () => import('pages/salesArea/SalesAreaList')
    },

]

export default salesAreaRouter;