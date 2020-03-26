import React, { Suspense, Fragment } from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconStyle />
      <Suspense fallback={<span>loading...</span>}>
        <BrowserRouter>
          <Switch>
            {
              renderRoutes(routes)
            }
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  );
}

export default App;
