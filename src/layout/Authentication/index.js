import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image'

import Session from '../../features/session';

import './index.min.css';

let Login = Session.Login;
let Register = Session.Register;


class AuthLayout extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      location: "login",
    }
  }

  componentDidMount() {
    let token   = localStorage.getItem("token");
    let {user}  = this.props.session;

    if (token && !user) {
      this.props.getUser();
    }

    this.getLocation();
  }

  componentDidUpdate() {
    if(this.props.location.pathname.replace("/portal/", "") !== this.state.location) {
      this.getLocation();
    }
  }

  getLocation() {
    const fullPath = this.props.location.pathname;
    const location = fullPath.replace("/portal/", "");

    this.setState({
      location,
    });
  }


  render() {

    let view;
    if (this.state.location === "login") {
      view = (
        <Login
          goToRegister={() => {
            this.context.router.history.replace("register");
          }}
          onLoggedIn={() => {
            this.context.router.history.replace("/");
          }}
        />
      )
    } else if (this.state.location === "register") {
      view = (
        <Register
          goToLogin={() => {
            this.context.router.history.replace("login");
          }}
          onLoggedIn={() => {
            this.context.router.history.replace("/");
          }}
        />
      )
    } else {
      this.context.router.history.replace("/nope");
    }

    return (
      <div className="AuthLayout">
        <div className="DialogLayout">
          <div className="Title">
            <img alt="" src="logo.png"/>
          </div>

          {view}

        </div>

        <Img
          className="ImageLayout_Image"
          src="media/authBackground.jpg"

          loader={
            <img
              className="ImageLayout_Placeholder"
              src="media/authBackground_low.jpg"
              alt=""
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
