const sysManageRouter = [
    {
        path: "/menuManage",
        name: 'menuManage',
        meta: {
            title:'菜单管理',
            keepalive:true
        },
        title: '菜单管理',
        component: () => import('pages/sysManage/menuList.vue')
    },
    {
        path: "/roleManage",
        name: 'roleManage',
        meta: {
            title:'角色管理',
        },
        title: '角色管理',
        component: () => import('pages/sysManage/roleList.vue')
    },
    {
        path: "/variableList",
        name: 'variableList',
        meta: {
            title:'参数管理',
        },
        title: '参数管理',
        component: () => import('pages/sysManage/variableDefinition.vue')
    },
    {
        path: "/variableSetting",
        name: 'variableSetting',
        meta: {
            title:'参数设置',
        },
        title: '参数设置',
        component: () => import('pages/sysManage/variableSetting.vue')
    },
    {
        path: "/variableSettingList",
        name: 'variableSettingList',
        meta: {
            title:'参数配置管理',
            keepalive:false
        },
        title: '参数配置管理',
        component: () => import('pages/sysManage/variableSettingList.vue')
    },
    {
        path: "/apidocList",
        name: 'apidocList',
        meta: {
            title:'开放平台接口文档',
            keepalive:true
        },
        title: '开放平台接口文档',
        component: () => import('pages/scriptManage/apidocList.vue')
    },
    {
        path: "/messageTemplate",
        name: 'messageTemplate',
        meta: {
            title:'消息模板',
            keepalive:false
        },
        title: '消息模板',
        component: () => import('pages/sysManage/messageTemplate.vue')
    },
    {
        path: "/messageTemplateCode",
        name: 'messageTemplateCode',
        meta: {
            title:'消息模板参数',
            keepalive:false
        },
        title: '消息模板参数',
        component: () => import('pages/sysManage/messageTemplateCode.vue')
    },
    {
        path: "/systemMenuList",
        name: 'systemMenuList',
        meta: {
            title:'服务商系统管理',
            keepalive:false
        },
        title: '服务商系统管理',
        component: () => import('pages/sysManage/systemMenuList.vue')
    },
    {
        path: "/fieldsManage",
        name: 'fieldsManage',
        meta: {
            title:'配置字段管理',
            keepalive:false
        },
        title: '配置字段管理',
        component: () => import('pages/sysManage/fieldsManage.vue')
    },
    {
        path: "/fieldDetail",
        name: 'fieldDetail',
        meta: {
            title:'表单字段详情',
            keepalive:false
        },
        title: '表单字段详情',
        component: () => import('pages/sysManage/fieldDetail.vue')
    },
    {
        path: "/clearUserPassErrorCount",
        name: 'clearUserPassErrorCount',
        meta: {
            title:'重置密码次数',
            keepalive:false
        },
        title: '重置密码次数',
        component: () => import('pages/sysManage/clearUserPassErrorCount.vue')
    },
]
export default sysManageRouter