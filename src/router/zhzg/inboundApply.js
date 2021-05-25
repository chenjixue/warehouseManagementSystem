const inboundApplyList = () => import('pages/zhzg/inboundApply/inboundApplyList.vue')
const inboundApplyAddProduct = () => import('pages/zhzg/inboundApply/inboundApplyAddProduct.vue')
const inboundApplyDetail = () => import('pages/zhzg/inboundApply/inboundApplyDetail.vue')
const inboundApplyAdd = () => import('pages/zhzg/inboundApply/inboundApplyAdd.vue')
const inboundApplyChangePro = () => import('pages/zhzg/inboundApply/inboundApplyChangePro.vue')
const supplierList = () => import('pages/zhzg/inboundApply/supplierList.vue')

const inboundApplyRouter = [
    {
        path: '/inboundApplyList',
        name: 'inboundApplyList',
        meta: {
            title: '采购入库申请',
            goBack: false,
            keepLive: true,
            slideDirection:'van-slide-left'
        },
        title: '采购入库申请',
        component: inboundApplyList
    },
    {
        path: '/inboundApplyAdd',
        name: 'inboundApplyAdd',
        meta: {
            title: '添加采购入库申请',
            goBack: true,
            keepLive: false,
            slideDirection:'van-slide-right'
        },
        title: '添加采购入库申请',
        component: inboundApplyAdd
    },
    {
        path: '/inboundApplyAddProduct',
        name: 'inboundApplyAddProduct',
        meta: {
            title: '添加产品',
            goBack: true,
            keepLive: false,
            slideDirection:'van-slide-right'
        },
        title: '添加产品',
        component: inboundApplyAddProduct
    },
    {
        path: '/inboundApplyDetail',
        name: 'inboundApplyDetail',
        meta: {
            title: '采购入库单明细',
            goBack: true,
            keepLive: false,
            slideDirection:'van-slide-right'
        },
        title: '采购入库单明细',
        component: inboundApplyDetail
    },
    {
        path: '/inboundApplyChangePro',
        name: 'inboundApplyChangePro',
        meta: {
            title: '修改入库单明细',
            goBack: true,
            keepLive: false,
            slideDirection:'van-slide-right'
        },
        title: '修改入库单明细',
        component: inboundApplyChangePro
    },
    {
        path: '/supplierList',
        name: 'supplierList',
        meta: {
            title: '选择供应商',
            goBack: true,
            keepLive: false,
            slideDirection:'van-slide-right'
        },
        title: '选择供应商',
        component: supplierList
    }
]

export default inboundApplyRouter