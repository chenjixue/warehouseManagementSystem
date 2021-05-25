const attendance = [
    {
        path: "/attendanceTemplate",
        name: 'attendanceTemplate',
        meta: {
            title:'考勤模板',
            keepalive:true
        },
        title: '考勤模板',
        component: () => import('pages/attendance/attendanceTemplate')
    },
    {
        path: "/attendanceRecord",
        name: 'attendanceRecord',
        meta: {
            title:'考勤记录',
            keepalive:true
        },
        title: '考勤记录',
        component: () => import('pages/attendance/attendanceRecord')
    },
    {
        path: "/attendanceAdd",
        name: 'attendanceAdd',
        meta: {
            title:'新增模板',
        },
        title: '新增模板',
        component: () => import('pages/attendance/attendanceAdd')
    },
    {
        path: "/attendanceEdit",
        name: 'attendanceEdit',
        meta: {
            title:'编辑模板',
            keepalive:true
        },
        title: '编辑模板',
        component: () => import('pages/attendance/attendanceEdit')
    },
]
export default attendance