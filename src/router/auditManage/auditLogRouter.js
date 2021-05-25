const auditLogRouter = [
    {
        path:'/auditLogList',
        name:'auditLogList',
        meta:{
            title:'审计日志',
            keepalive:true
        },
        title:'审计日志',
        component:()=>import('pages/auditManage/auditLogList')
    },
    {
        path:'/systemLogList',
        name:'systemLogList',
        meta:{
            title:'其他日志',
            keepalive:true
        },
        title:'其他日志',
        component:()=>import('pages/auditManage/systemLogList')
    },
]

export default auditLogRouter