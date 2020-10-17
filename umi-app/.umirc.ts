import { defineConfig } from 'umi';
export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    "proxy": {
        "/api": {
            "target": "https://pvp.qq.com",
            "changeOrigin": true,
            "pathRewrite": { "^/api": "" }
        }
    },
    ignoreMomentLocale: true,
    routes: [
        { path: '/', component: '@/pages/login/login' },
        {
            path: "/home",
            component: '@/layouts/index',
            routes: [
                { path: "/home", component: "@/pages/home/index" },
            ]
        },
        {
            path: "/comp",
            component: '@/layouts/index',
            routes: [
                { path: "/comp/table", component: "@/pages/comp/table" },
                { path: "/comp/form", component: "@/pages/comp/form" },
                { path: '/comp/tree', component: '@/pages/comp/tree' },
                { path: "/comp/modal", component: "@/pages/comp/modal" },
                { path: '/comp/hooks', component: '@/pages/comp/hooks' }
            ]
        },
        {
            path: "/exception",
            component: "@/layouts/index",
            routes: [
                { path: '/exception/404', component: "@/pages/exception/404" }
            ]
        },
        {
            path: '/other',
            component: "@/layouts/index",
            routes: [
                { path: "/other/result", component: '@/pages/other/result' }
            ]
        }
    ],
});
