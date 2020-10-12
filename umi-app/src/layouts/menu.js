import { HomeOutlined, DashboardOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
export default [
    { name: "home", path: '/comp/home', id: 1, icon: < HomeOutlined / > },
    {
        name: "组件",
        id: 2,
        path: "/comp",
        icon: < DashboardOutlined / > ,
        children: [
            { name: "table", path: "/comp/table", id: 21 },
            { name: "form", path: "/comp/form", id: 22 },
        ]
    },
    {
        name: '异常页',
        id: 3,
        path: '/exception',
        icon: < ExclamationCircleOutlined / > ,
        children: [
            { name: "404", path: '/exception/404', id: 31 }
        ]
    }
]