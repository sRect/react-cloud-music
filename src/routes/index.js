import React, {lazy} from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../application/Home';
// import Rank from '../application/Rank';
// import Recommend from '../application/Recommend';
// import Singers from '../application/Singers';
const Rank = lazy(() => import(/* webpackChunkName: "rank" */'../application/Rank'));
const Recommend = lazy(() => import(/* webpackChunkName: "recommend" */'../application/Recommend'));
const Singers = lazy(() => import(/* webpackChunkName: "singers" */'../application/Singers'));

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to='/recommend' />
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/singers',
        component: Singers
      },
      {
        path: '/rank',
        component: Rank
      },
    ]
  }
];

export default routes;
