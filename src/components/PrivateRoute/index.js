import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { AuthActions } from '~/store/ducks/auth';

const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  const route = p => (isLogged ? <Component {...p} /> : <Redirect to={{ pathname: '/' }} />);

  return <Route {...rest} render={p => route(p)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLogged: state.auth.logged,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...AuthActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
