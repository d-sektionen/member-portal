import React, { Component } from 'react';
import style from './layout.module.scss';

class Above extends Component {

  render() {
    return (
      <div className={style.above}>
        {this.props.children}
      </div>
    );
  }
}

export default Above;
