
const routes = [
    {
        path: '/system',
        name: 'system-manage',
        //redirect: '/system/user',
        component: () => import('../pages/system-manage/index.vue'),
        meta: {
            requireAuth: true,         
            icon: 'el-icon-s-tools',
            name: '系统管理',             
            level: 1
        },
        children: [
            {
                path: '/system/user',
                name: 'user-manage',
                component: () => import('../pages/system-manage/user-manage.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '用户管理',
                    level: 2
        　　　　},
            },
            {
                path: '/system/menu',
                name: 'menu-manage',
                component: () => import('../pages/system-manage/menu-manage.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '菜单管理',
                    level: 2
        　　　　},
            },
            {
                path: '/system/authority',
                name: 'authority-manage',
                component: () => import('../pages/system-manage/authority-manage.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '权限管理',
                    level: 2
        　　　　},
            },
        ]
    },
    {
        path: '/business',
        name: 'business-manage',
        redirect: '/business/queuing',
        meta: {
            requireAuth: true,         
            icon: 'el-icon-s-platform',    
            name: '业务管理',             
            level: 1
        },
        children: [
            {
                path: '/business/queuing',
                name: 'queuing-number',
                component: () => import('../pages/business-manage/queuing-number.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '排队叫号',
                    level: 2
        　　　　},
            },
            {
                path: '/business/evaluation',
                name: 'evaluation-supervise',
                component: () => import('../pages/business-manage/evaluation-supervise.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '评价监管',
                    level: 2
        　　　　},
            },
            {
                path: '/business/work',
                name: 'work-supervise',
                component: () => import('../pages/business-manage/work-supervise.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '工作监管',
                    level: 2
        　　　　},
            },
        ]
    },
    {
        path: '/list',
        name: 'list-manage',
        redirect: '/business/queuing',
        meta: {
            requireAuth: true,         
            icon: 'el-icon-s-order',    
            name: '人员名单管理',             
            level: 1
        },
        children: [
            {
                path: '/list/control',
                name: 'control-manage',
                component: () => import('../pages/list-manage/control-manage.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '布控库管理',
                    level: 2
        　　　　},
            },
            {
                path: '/list/interface',
                name: 'interface-manage',
                component: () => import('../pages/list-manage/interface-manage.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '接口管理',
                    level: 2
        　　　　},
            }
        ]
    },
    {
        path: '/portrait',
        name: 'portrait-supervise',
        redirect: '/portrait/retrieve',
        meta: {
            requireAuth: true,         
            icon: 'el-icon-user-solid',    
            name: '人像监管',             
            level: 1
        },
        children: [
            {
                path: '/portrait/retrieve',
                name: 'portrait-retrieve',
                component: () => import('../pages/portrait-supervise/portrait-retrieve.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '人像检索',
                    level: 2
        　　　　},
            },
            {
                path: '/portrait/person',
                name: 'person-supervise',
                component: () => import('../pages/portrait-supervise/person-supervise.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '人员监管',
                    level: 2
        　　　　},
            },
            {
                path: '/portrait/blacklist',
                name: 'blacklist-analyse',
                component: () => import('../pages/portrait-supervise/blacklist-analyse.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '黑名单分析',
                    level: 2
        　　　　},
            }
        ]
    },
    {
        path: '/warning',
        name: 'warning-notice',
        redirect: '/warning/work',
        meta: {
            requireAuth: true,         
            icon: 'el-icon-message-solid',    
            name: '预警通知',             
            level: 1
        },
        children: [
            {
                path: '/warning/work',
                name: 'work-warning',
                component: () => import('../pages/warning-notice/work-warning.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '工作预警',
                    level: 2
        　　　　},
            },
            {
                path: '/warning/portrait',
                name: 'portrait-warning',
                component: () => import('../pages/warning-notice/portrait-warning.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '人像预警',
                    level: 2
        　　　　},
            },
            {
                path: '/warning/interface',
                name: 'interface-warning',
                component: () => import('../pages/warning-notice/interface-warning.vue'),
                meta: {
        　　　　　   requireAuth: true,
                    name: '接口预警',
                    level: 2
        　　　　},
            },
        ]
    }
]
const otherRoutes = [
    {
    　　path: '/',
    　　redirect: '/index'
    },
    {
　　　　path: '/index',
　　　　name: 'index',
　　　　component: () =>import('../pages/demo/demo'),
　　　　meta: {
　　　　　   requireAuth: true,         // 进入当前page是否需要登录
            icon: 'el-icon-s-home',    // 导航左边的图标class
            name: '首页',              // 当前page名
            level: 1,                  // 导航级别
            navList: [                 // 当前page头部应该出现的导航
                // { name: '首页', path: '/index' }
            ]
　　　　},
    },
    {
    　　path: '*',
    　　redirect: '/index'
    },
]
export {
    routes, otherRoutes
}