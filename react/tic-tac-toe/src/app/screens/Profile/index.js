import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import { BACK_LABEL } from './constants';

import actionCreators from '~redux/login/actions';

import profileImg from '../../assets/saco.jpg';

class Profile extends Component {
  render() {
    return (
      <main className={styles.main}>
        <div className={styles.profileContainer}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={profileImg} />
          </div>
          <div className={styles.descContainer}>
            <h1 className={styles.title}>User Profile</h1>
            <div className={styles.data}>
              <p className={styles.dataUser}>Name: <span>Renzo Torres</span></p><br/>
              <p className={styles.dataUser}>Age: <span>31</span></p><br/>
              <p className={styles.dataUser}>Address: <span>San Luis - 1234</span></p>
            </div>
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
        <a className={styles.linkBack} href="#" onClick={this.props.goBackPage}>
          {BACK_LABEL}
        </a>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  goBackPage: () => dispatch(actionCreators.goBackPage())
});

export default connect(null, mapDispatchToProps)(Profile);
