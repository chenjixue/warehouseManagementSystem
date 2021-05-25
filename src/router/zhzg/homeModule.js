const home = () => import('pages/zhzg/home/Home.vue')

const homeRouter = [
    {
        path: "/home",
        name: 'home',
        meta: {
            title:'首页'
        },
        title: '首页',
        component: home
    }]

export default homeRouter