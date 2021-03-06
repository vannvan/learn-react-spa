import { defineConfig } from 'umi';
export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    proxy: {
        '/api': {
            target: 'https://pvp.qq.com',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        },
    },
    ignoreMomentLocale: true,
    routes: [
        // { component: '@/pages/exception/404' },
        { path: '/', component: '@/pages/login/login' },
        {
            path: '/home',
            component: '@/layouts/index',
            routes: [{ path: '/home', component: '@/pages/home/index' }],
        },
        {
            path: '/comp',
            component: '@/layouts/index',
            routes: [
                {
                    path: '/comp/table',
                    component: '@/pages/comp/table',
                    meta: { title: '表格' },
                },
                {
                    path: '/comp/form',
                    component: '@/pages/comp/form',
                    meta: { title: '表单' },
                },
                {
                    path: '/comp/tree',
                    component: '@/pages/comp/tree',
                    meta: { title: '树形组件' },
                },
                {
                    path: '/comp/modal',
                    component: '@/pages/comp/modal',
                    meta: { title: '模态框' },
                },
                {
                    path: '/comp/hooks',
                    component: '@/pages/comp/hooks',
                    meta: { title: 'hooks' },
                },
                {
                    path: '/comp/route',
                    component: '@/pages/comp/route',
                    meta: { title: '路由' },
                },
                {
                    path: '/comp/redux',
                    component: '@/pages/comp/redux',
                    meta: { title: "redux" }
                }
            ],
        },
        {
            path: '/exception',
            component: '@/layouts/index',
            routes: [
                {
                    path: '/exception/404',
                    component: '@/pages/exception/404',
                    meta: { title: '404' },
                },
            ],
        },
        {
            path: '/other',
            component: '@/layouts/index',
            routes: [
                {
                    path: '/other/result',
                    component: '@/pages/other/result',
                    meta: { title: '结果页' },
                },
            ],
        },
    ],
});
