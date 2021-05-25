const registerCodeList = () => import('pages/registerCodeManager/registerCodeList')
const registerCodeRouter = [
    {
        path: "/registerCodeList",
        name: 'registerCodeList',
        meta: {
            title:'手机验证码查询',
            keepalive:true
        },
        title: '手机验证码查询',
        component: registerCodeList
    },

]
export default registerCodeRouter