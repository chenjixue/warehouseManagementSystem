const messageList = ()=>import("pages/massageManage/messageList")

const messageManageRouter = [
    {
        path:'/messageList',
        name:'messageList',
        title:'消息管理',
        component:messageList
    }
]

export default messageManageRouter