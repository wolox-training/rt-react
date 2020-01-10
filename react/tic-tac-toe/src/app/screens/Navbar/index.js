import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import actionCreators from '~redux/login/actions';

import styles from './styles.module.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <NavLink className={styles.link} to={ROUTES.game}>Game</NavLink>
        <NavLink className={styles.link} to={ROUTES.profile}>Profile</NavLink>
        <NavLink className={styles.link} to='#' onClick={this.props.logout}>Logout</NavLink>
      </nav>  
    );
  }
}

const matDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(null, matDispatchToProps)(Navbar);
