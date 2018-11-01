import React, { Component } from 'react';
import Pixels from "../pixels";
import style from './layout.module.scss';

class Layout extends Component {

  render() {
    return (
      <div className={style.app}>
        <div className={style.pixels}>
          <Pixels loading={this.props.loading} />
        </div>
        <div className={style.containerWrapper}>
          <div className={style.container}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
