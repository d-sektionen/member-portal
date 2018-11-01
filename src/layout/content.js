import React, { Component } from 'react';
import style from './layout.module.scss';

class Content extends Component {

  render() {
    return (
      <div className={style.content}>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
