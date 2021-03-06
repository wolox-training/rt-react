import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import { LABELS } from './constants';

import actionCreators from '~redux/login/actions';
import { withConditionalRendering } from '../../components/AuthHoc';

import profileImg from '../../assets/saco.jpg';

function Profile(props) {
  return (
    <main className={styles.main}>
      <div className={styles.profileContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={profileImg} />
        </div>
        <div className={styles.descContainer}>
          <h1 className={styles.title}>{LABELS.title}</h1>
          <div className={styles.data}>
            <p className={styles.dataUser}>{LABELS.name}: <span>Renzo Torres</span></p><br/>
            <p className={styles.dataUser}>{LABELS.age}: <span>31</span></p><br/>
            <p className={styles.dataUser}>{LABELS.address}: <span>San Luis - 1234</span></p>
          </div>
          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <a className={styles.linkBack} href="#" onClick={props.goBackPage}>
        {LABELS.back}
      </a>
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  goBackPage: () => dispatch(actionCreators.goBackPage())
});

export default connect(null, mapDispatchToProps)(withConditionalRendering(Profile));
