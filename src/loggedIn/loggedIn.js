import React, {Component} from 'react';
import {BASE_URL} from "../config";
import TopBar from './topBar';
import Above from '../layout/above';
import Content from '../layout/content';
import Cookies from 'js-cookie';
import Preferences from '../preferences/preferences';

class LoginTest extends Component {
  constructor(props) {
    super(props);

    this.state = {loading: true};

    this.success = this.success.bind(this);
    this.failure = this.failure.bind(this);
  }

  componentDidMount() {
    let url = BASE_URL + "/account/user/me";
    let token = Cookies.get('token');

    fetch(url, {
      headers: new Headers({
        "Authorization": "JWT " + token
      })
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Network response was not ok.');
    }).then(this.success)
      .catch(this.failure);
    this.props.setLoading(true);
  }

  success(data) {
    this.props.setLoading(false);
    this.setState({
      loading: false,
      success: true,
      data: data
    });
  }

  failure() {
    this.props.setLoading(false);
    this.setState({
      loading: false,
      success: false
    });
  }

  render() {
    if (this.state.loading) {
      return <></>;
    }

    if (this.state.success) {
      return (
        <>
          <Above>
            <TopBar name={this.state.data.username} logout={LoginTest.logout} />
          </Above>
          <Content>
            <Preferences user={this.state.data}/>
          </Content>
        </>
      );
    }

    return (
      <>
        <Above>
          <a href="#" className="button" onClick={LoginTest.logout}>Logga ut</a>
        </Above>
        <Content>
          <p>
            Inloggningen misslyckades, testa igen.
          </p>
        </Content>
      </>
    );
  }

  static logout() {
    Cookies.remove('token');
    window.location.reload();
  }
}

export default LoginTest;
