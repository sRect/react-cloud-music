import React, { memo, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {
  Top,
  Tab,
  TabItem,
} from './style';

const Home = (props) => {
  console.log(props)
  const { route: { routes } } = props;

  return (
    <Fragment>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span> 推荐 </span></TabItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TabItem><span> 歌手 </span></TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem><span> 排行榜 </span></TabItem></NavLink>
      </Tab>
      {
        renderRoutes(routes)
      }
    </Fragment>
  )
}

export default memo(Home)
