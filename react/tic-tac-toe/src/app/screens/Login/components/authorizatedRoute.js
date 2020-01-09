import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthorizedRoute extends React.Component {
  render() {
    console.log('Authorizated routes');
    const { component: Component, pending, isLogged, ...rest } = this.props;
    return (
      <Route {...rest} render={props => {
        return isLogged
          ? <Component {...this.props} />
          : <Redirect to="/login" />
      }} />
    )
  }
}

const mapStateToProps = state => ({
  isLogged: state.login.isLogged
});

export default connect(mapStateToProps)(AuthorizedRoute)
