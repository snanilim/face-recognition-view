import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { isAuthenticated } from './isAuthenticated';


// import Login from '../Auth/components/Login';
// import Signup from '../Auth/components/Signup';
// import AuthLayout from '../Layout/AuthLayout';
import DashboardLayout from '../Layout/DashboardLayout';
import DetailLayout from '../Layout/DetailLayout';

import Dashboard from '../Dashboard/Dashboard';
import AddLink from '../Post/components/AddLink';
import AddPost from '../Post/components/AddPost';
import AddImgToText from '../Post/components/AddImgToText';

import Tag from '../Tag/components/Tag';
import Topic from '../Topic/components/Topic';
import Category from '../Category/components/Category';
// import Generator from '../Generator/components/Generator';

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
      <SkipRoute exact path="/" layout={DashboardLayout} component={Dashboard} />
      {/* <SkipRoute path="/login" exact layout={AuthLayout} component={Login} />
      <SkipRoute path="/signup" exact layout={AuthLayout} component={Signup} /> */}

      <SkipRoute exact path="/dashboard" layout={DashboardLayout} component={Dashboard} />
      <SkipRoute exact path="/add/link" layout={DashboardLayout} component={AddLink} />
      <SkipRoute exact path="/add/post" layout={DashboardLayout} component={AddPost} />
      <SkipRoute exact path="/add/img-to-text" layout={DashboardLayout} component={AddImgToText} />

      <SkipRoute exact path="/tag" layout={DashboardLayout} component={Tag} /> 
      <SkipRoute exact path="/topic" layout={DashboardLayout} component={Topic} /> 
      <SkipRoute exact path="/category" layout={DashboardLayout} component={Category} />
      <SkipRoute exact path="/item/detail/:id" layout={DetailLayout} component={Category} />
    </Switch>
  );
};

export default Routes;
