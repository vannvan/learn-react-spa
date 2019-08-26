// import {lazy} from 'react';
import BasicLayout from '@/layout/BasicLayout';
import Home from "@/pages";
import User from '@/pages/User';
import Game from '@/pages/Game';
import Redux from '@/pages/Redux';
import NotFound from '@/pages/Exception';


const createHistory = require("history").createBrowserHistory
export const history = createHistory();

export const routes = [
  {
    path:'/',
    redirect:'/navone/home'
  },
  {
    path:'/navone',
    redirect:'/navone/home',
    children:[
      {
        path:'/home',
        layout:BasicLayout,
        component:Home
      },
      {
        path:'/user',
        layout:BasicLayout,
        component:User
      },
      {
        path:'/game',
        layout:BasicLayout,
        component:Game
      },
      {
        path:'/redux',
        layout:BasicLayout,
        component:Redux
      }
    ]
  },
  {
    path:'*',
    component:NotFound
  }
]
