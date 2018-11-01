import React, { Component } from 'react';
import style from './loggedIn.module.scss';

class TopBar extends Component {

  render() {
    return (
      <div className={style.topBar}>
        <div>Inloggad som: {this.props.name}</div>
        <a href="#" className="button" onClick={this.props.logout}>Logga ut</a>
      </div>
    );
  }
}

export default TopBar;
