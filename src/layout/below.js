import React, { Component } from 'react';
import style from './layout.module.scss';

class Below extends Component {

  render() {
    return (
      <div className={style.below}>
        {this.props.children}
      </div>
    );
  }
}

export default Below;
