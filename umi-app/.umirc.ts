import { defineConfig } from 'umi';
export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        { path: '/', component: '@/pages/hello/hello' },
        {
            path: "/comp",
            component: '@/layouts/index',
            routes: [
                { path: "/comp/home", component: "@/pages/hello/home" },
                { path: "/comp/table", component: "@/pages/comp/table" },
                { path: "/comp/form", component: "@/pages/comp/form" },
            ]
        },
        {
            path: "/exception",
            component: "@/layouts/index",
            routes: [
                { path: '/exception/404', component: "@/pages/exception/404" }
            ]
        }
    ],
});
