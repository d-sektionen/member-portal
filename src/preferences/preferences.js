import React, { Component } from 'react';
import {BASE_URL} from "../config";
import Cookies from 'js-cookie';
import axios from 'axios';

import style from './preferences.module.scss';

import { stringify } from 'querystring';

class Preferences extends Component {
  constructor(props) {
    super(props)

    if (!props.user.profile) props.user.profile={}

    this.state = {
      liuCardId: props.user.profile.liu_card_id,
      firstName: props.user.first_name,
      lastName: props.user.last_name,
      errors: {}
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, event) {
    this.setState({[field]: event.target.value});
  }

  handleSubmit(event) {
    let url = BASE_URL + "/account/user/me/";
    let token = Cookies.get('token');

    // reset errors
    this.setState({error: undefined, success: undefined, errors: {}})

    axios.put(url, {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      profile: {
        liu_card_id: this.state.liuCardId
      }
      
    }, {
      headers: {
        "Authorization": "JWT " + token
      }
    })
    .then((res) => {
      if (res.status < 300)
        this.setState({ success: "Ändringarna har sparats." });
    })
    .catch((err) => {
      if (!err.response)
        this.setState({ error: "Nätverksfel." })
      else if (err.response.status === 400)
        this.setState({ errors: err.response.data });
      else
        this.setState({ error: "Något gick fel." })
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label className={style.inputLabel}>
            Förnamn:
            <input value={this.state.firstName} onChange={e => this.handleChange('firstName', e)} />
          </label>
          {this.state.errors.first_name && <div className={style.error}>{this.state.errors.first_name}</div>}
        </div>
        <div>
          <label className={style.inputLabel}>
            Efternamn:
            <input value={this.state.lastName} onChange={e => this.handleChange('lastName', e)} />
          </label>
          {this.state.errors.last_name && <div className={style.error}>{this.state.errors.last_name}</div>}
        </div>
        <div>
          <label className={style.inputLabel}>
            LiU-kortnummer:
            <input value={this.state.liuCardId} onChange={e => this.handleChange('liuCardId', e)} />
          </label>
          {this.state.errors.profile && this.state.errors.profile.liu_card_id && <div className={style.error}>{this.state.errors.profile.liu_card_id}</div>}
        </div>
        <div>
          <input type="submit" value="Spara" className={`${style.submit} button`} />
        </div>
        <div>
          {this.state.error && <div className={style.error}>{this.state.error}</div>}
          {this.state.success && <div className={style.success}>{this.state.success}</div>}
        </div>
      </form>
    );
  }
}

export default Preferences;
