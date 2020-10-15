import { HomeOutlined, DashboardOutlined, ExclamationCircleOutlined, TagsOutlined } from '@ant-design/icons';
export default [
    { name: "home", path: '/home', id: 1, icon: < HomeOutlined / > },
    {
        name: "常用组件",
        id: 2,
        path: "/comp",
        icon: < DashboardOutlined / > ,
        children: [
            { name: "table", path: "/comp/table", id: 21 },
            { name: "form", path: "/comp/form", id: 22 },
            { name: 'tree', path: '/comp/tree', id: 23 },
            { name: "modal", path: '/comp/modal', id: 24 },
        ]
    },
    {
        name: '异常',
        id: 3,
        path: '/exception',
        icon: < ExclamationCircleOutlined / > ,
        children: [
            { name: "404", path: '/exception/404', id: 31 },
        ]
    },
    {
        name: "其他",
        id: 4,
        path: '/other',
        icon: < TagsOutlined / > ,
        children: [
            { name: 'result', path: '/other/result', id: 41 }
        ]
    }
]