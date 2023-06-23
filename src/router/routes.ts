export const constantRoute=[
    //登录
    {
        path: '/login',
        component: () => import('../views/login/index.vue'),
        name: 'login'
    },
    //登录成功后展示数据的路由
    {
        path: '/',
        name: 'layout',
        component: () => import('../layout/index.vue')
    },
    {
        path:'/404',
        name:"404",
        component:()=>import('../views/404/index.vue')
    },
    {
        path:'/:pathMatch(.*)*',
        redirect:'/404',
        name:'Any'
    }
]