const productInfoList = () => import('pages/productInfo/productInfoList')
const productPage = () => import('pages/productInfo/productInfoPage')
const statisticsList = () => import('pages/statistics/statisticsList')
const productSkuList = () => import('pages/productSku/productSkuList')

const productRouter = [
    {
        path: "/productList",
        name: 'productList',
        meta: {
            title:'商品信息管理',
            keepalive:true
        },
        title: '商品信息管理',
        component: productInfoList
    },
    {
        path: "/productPage",
        name: 'productPage',
        meta: {
            title:'商品信息',
        },
        title: '商品信息',
        component: productPage
    },
    {
        path: "/productSkuList",
        name: 'productSkuList',
        meta: {
            title:'商品SKU',
        },
        title: '商品SKU',
        component: productSkuList
    },
    {
        path: "/statisticsList",
        name: 'statisticsList',
        meta: {
            title:'包装规格信息',
        },
        title: '商品信息',
        component: statisticsList
    },
]

export default productRouter;