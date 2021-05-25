const storeList = () => import('pages/storeReport/storeList.vue')
const storeHouseList = () => import('pages/storeReport/storeHouseList.vue')
const damagedStoreList = () => import('pages/storeReport/damagedStoreList.vue')
const storeBatchList = () => import('pages/storeReport/storeBatchList.vue')

const storeReportRouter = [
    {
        path: "/storeList",
        name: 'storeList',
        meta: {
            title:'库存记录',
            keepalive:false
        },
        title: '库存记录',
        component: storeList
    },
    {
        path:"/storeHouseList",
        name:'storeHouseList',
        meta:{
            title:'库位库存查询',
            keepalive:false
        },
        title:'库位库存查询',
        component:storeHouseList
    },
    {
        path:"/damagedStoreList",
        name:'damagedStoreList',
        meta:{
            title:'破损记录',
            keepalive:true
        },
        title:'破损记录',
        component:damagedStoreList
    },
    {
        path:"/storeBatchList",
        name:'storeBatchList',
        meta:{
            title:'批次库存',
            keepalive:true
        },
        title:'批次库存',
        component:storeBatchList
    }
]
export default storeReportRouter