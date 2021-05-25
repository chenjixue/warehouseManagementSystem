const subCompanyList = () => import('pages/subCompany/subCompanyList')
const subCompanyDetail = () => import('pages/subCompany/subCompanyDetail')

const subCompanyRouter = [
    {
        path: "/subCompanyList",
        name: 'subCompanyList',
        meta: {
            title:'组织机构管理',
            keepalive:true
        },
        title: '组织机构管理',
        component: subCompanyList
    },
    {
        path: "/subCompanyDetail",
        name: 'subCompanyDetail',
        meta: {
            title:'公司信息'
        },
        title: '公司信息',
        component: subCompanyDetail
    }
]

export default subCompanyRouter;