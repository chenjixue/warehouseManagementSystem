
const printRouter = [
    {
        path: "/templateList",
        name: 'templateList',
        meta: {
            title:'打印方案管理',
            keepalive:true
        },
        title: '打印方案管理',
        component: () => import('pages/printModule/printTemplateList')
    },
    {
        path: "/templateConfig",
        name: 'templateConfig',
        meta: {
            title:'打印方案配置',
            keepalive:true
        },
        title: '打印方案配置',
        component: () => import('pages/printModule/printTemplateConfig')
    },
]

export default printRouter;