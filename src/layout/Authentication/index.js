import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image'

import './index.min.css';



class AuthLayout extends Component {
  constructor(props, context) {
    super(props);
  }


  render() {
    return (
      <div className="AuthLayout">
        <div className="DialogLayout">
          <div className="Title">
            <img alt='' src="logo.png"/>
          </div>
          
          {this.props.children}
        </div>

        <Img
          className="ImageLayout_Image"
          src="media/authBackground.jpg"

          loader={
            <img
              className="ImageLayout_Placeholder"
              src="media/authBackground_low.jpg"
            />
          }
        />
      </div>
    );
  }
}

AuthLayout.contextTypes = {
   router: PropTypes.object,
}

export default AuthLayout;
