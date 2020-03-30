import React, { Suspense, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import store from './store';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import Loading from './baseUI/loading';


function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <IconStyle />
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Switch>
              {
                renderRoutes(routes)
              }
              <Redirect from="*" to="/"></Redirect>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </Fragment>
  );
}

export default App;
