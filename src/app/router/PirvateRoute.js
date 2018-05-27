import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from '../common/Header/Header';
import Footer from '../common/Footer';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
          <Footer />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uuid
});

export default connect(mapStateToProps)(PrivateRoute);
