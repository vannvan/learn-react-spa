// import {lazy} from 'react';
import BasicLayout from '@/layout/BasicLayout';
import Home from "@/pages";
import User from '@/pages/User';
import Game from '@/pages/Game';
import Redux from '@/pages/Redux/index.jsx';
import NotFound from '@/pages/Exception';
import Antd from '@/pages/Antd/index.jsx';
import antdTable from '@/pages/Antd/table.jsx';
import antdMenu from '@/pages/Antd/menu.jsx';
import ApexCharts from '@/pages/ApexCharts/index.jsx'
import cardProps from '@/pages/Card/index.jsx'
import cardList from '@/pages/Card/list.jsx'
import customInput from '@/pages/Example/customInput.jsx'


const createHistory = require("history").createBrowserHistory
export const history = createHistory();

export const routes = [{
        path: '/',
        redirect: '/navone/home'
    },
    {
        path: '/navone',
        redirect: '/navone/home',
        children: [{
                path: '/home',
                layout: BasicLayout,
                component: Home
            },
            {
                path: '/user',
                layout: BasicLayout,
                component: User
            },
            {
                path: '/game',
                layout: BasicLayout,
                component: Game
            },
            {
                path: '/redux',
                layout: BasicLayout,
                component: Redux
            },
            {
                path: '/antd',
                layout: BasicLayout,
                component: Antd
            },
            {
                path: '/antdTable',
                layout: BasicLayout,
                component: antdTable
            },
            {
                path: '/antdMenu',
                layout: BasicLayout,
                component: antdMenu
            },
            {
                path: '/ApexCharts',
                layout: BasicLayout,
                component: ApexCharts
            },
            {
                path: '/cardProps',
                layout: BasicLayout,
                component: cardProps
            },
            {
                path: '/cardList',
                layout: BasicLayout,
                component: cardList
            },
            {
                path: '/customInput',
                layout: BasicLayout,
                component: customInput
            }
        ]
    },
    {
        path: '*',
        component: NotFound
    }
]