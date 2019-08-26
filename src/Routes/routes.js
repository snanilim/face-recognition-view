import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { isAuthenticated } from './isAuthenticated';

import DashboardLayout from '../Layout/DashboardLayout';
import Upload from '../Upload/Upload';
import Match from '../Match/Match';


const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }}
        />
      )
    )}
  />
);

const SkipRoute = ({ layout: Layout, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location },
        }}
        />
      ) : (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    )}
  />
);

const Routes = () => {
  return (
    <Switch>
      <SkipRoute exact path="/" layout={DashboardLayout} component={Upload} />
      <SkipRoute exact path="/upload" layout={DashboardLayout} component={Upload} />
      <SkipRoute exact path="/match" layout={DashboardLayout} component={Match} /> 

    </Switch>
  );
};

export default Routes;
