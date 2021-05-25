const operationManual = ()=>import("pages/operationManual/operationManual")

const operationManualRouter = [
    {
        path:'/operationManual/:id',
        name:'operationManual',
        title:'操作手册',
        component:operationManual
    }
]

export default operationManualRouter