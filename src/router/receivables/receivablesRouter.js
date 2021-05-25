const taskReceivables = () => import('pages/receivables/taskReceivables')

const receivables = [
    {
        path: "/taskReceivables",
        name: 'taskReceivables',
        meta: {
            title:'车次待收款',
            keepalive:false
        },
        title: '车次待收款',
        component: taskReceivables
    },
]

export default receivables;
