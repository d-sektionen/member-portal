import React, { Component } from 'react';
import {BASE_URL} from "../config";
import Cookies from 'js-cookie';
import axios from 'axios';
import { stringify } from 'querystring';

class Preferences extends Component {
  constructor(props) {
    super(props)

    console.log(props);

    this.state = {
      liuCardId: props.user.profile.liu_card_id,
      firstName: props.user.first_name,
      lastName: props.user.last_name
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
      console.log(res.data);
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Förnamn:
            <input value={this.state.firstName} onChange={e => this.handleChange('firstName', e)} />
          </label>
        </div>
        <div>
          <label>
            Efternamn:
            <input value={this.state.lastName} onChange={e => this.handleChange('lastName', e)} />
          </label>
        </div>
        <div>
          <label>
            LiU-kortnummer:
            <input value={this.state.liuCardId} onChange={e => this.handleChange('liuCardId', e)} />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Preferences;
