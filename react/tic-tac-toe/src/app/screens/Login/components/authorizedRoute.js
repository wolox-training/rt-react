import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { TOKEN_GAME } from '~constants/auth';
import actionCreators from '~redux/login/actions';

import Navbar from '../../Navbar';

class AuthorizedRoute extends React.Component {
  componentDidMount() {
    const tokenGame = localStorage.getItem(TOKEN_GAME);
    if (tokenGame) this.props.setTokenFromLocalStorage(tokenGame);
  }
  
  componentWillMount() {
    this.props.getUserLogged();
  }

  render() {
    const { component: Component, pending, isLogged, ...rest } = this.props
    return (
      <Route {...rest} render={props => {
        if (pending) return <div>Loading...</div>
        return isLogged
          ? (
            <Fragment>
              <Navbar />
              <Component {...this.props} />
            </Fragment>
            )
          : <Redirect to="/login" />
      }} />
    )
  }
}

const mapStateToProps = state => ({
  isLogged: state.login.isLogged,
  pending: state.login.pending
});

const mapDispatchToProps = dispatch => ({
  getUserLogged: () => dispatch(actionCreators.getUserLogged()),
  setTokenFromLocalStorage: token => dispatch(actionCreators.setTokenFromLocalStorage(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute)
