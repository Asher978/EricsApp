import React, { Component } from 'react';
import axios from 'axios';

import Auth from '../modules/Auth';
import ImageUpload from './ImageUpload';

class Dash extends Component {
  constructor() {
    super();
    this.state = {
      userData: null,
      userDataLoaded: false,
    }
  }

  componentDidMount() {
    this.props.resetFireRedirect()
    axios('/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: `${Auth.getToken()}`,
      }
    }).then(res => {
      console.log(res)
      this.setState({
        userData: res.data.user,
        userDataLoaded: true,
      })
    })
  }

  render() {
    return (
      <div className="dash">
        {(this.state.userDataLoaded) ? <ImageUpload /> : <p>Loading ...</p>}
      </div>
    );
  }
}

export default Dash;