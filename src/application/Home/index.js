import React, { memo, Fragment } from 'react';
import { renderRoutes } from 'react-router-config';

const Home = (props) => {
  console.log(props)
  const { route: { routes } } = props;

  return (
    <Fragment>
      <div>home</div>
      {
        renderRoutes(routes)
      }
    </Fragment>
  )
}

export default memo(Home)
