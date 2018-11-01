import React, { Component } from 'react';
import Cookies from 'js-cookie';
import LoggedIn from "./loggedIn/loggedIn";
import Layout from './layout/layout';
import Below from './layout/below';
import Content from './layout/content';

import {BASE_URL} from "./config";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false
    };

    this.setLoading = this.setLoading.bind(this);
  }

  render() {
    const loginUrl = BASE_URL + "/account/token?redirect=" + window.location.href;
    const token = Cookies.get('token');


    return (
      <Layout loading={this.state.loading}>
        {token !== undefined ?
          (<LoggedIn setLoading={this.setLoading} />)
          :
          (<>
            <Content>
              <p>
                Genom att logga in här kan du uppdatera din profil i vår databas, inloggningen sker via LiUs centrala inloggningssystem.
              </p>
            </Content>
            <Below>
              <a href={loginUrl} className="button">Logga in</a>
            </Below>
          </>)
        }
      </Layout>
    );
  }

  setLoading(bool) {
    this.setState({loading: bool})
  }
}

export default App;
