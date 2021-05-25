const locationList = () => import('pages/storageLocation/storageLocationList')

const locationRouter = [
    {
        path: "/locationList",
        name: 'locationList',
        meta: {
            title:'货位管理',
            keepalive:true
        },
        title: '货位管理',
        component: locationList
    },
]

export default locationRouter;