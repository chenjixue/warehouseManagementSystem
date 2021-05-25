const adminUserRouter = [
    {
        path:'/adminUserList',
        component:()=>import('pages/adminUser/adminUserList')
    },
    {
        path:'/salaryTemplateList',
        component:()=>import('pages/adminUser/salaryTemplateList')
    },
    {
        path:'/salaryLevelTemplateList',
        component:()=>import('pages/adminUser/salaryLevelTemplateList')
    },
]

export default adminUserRouter