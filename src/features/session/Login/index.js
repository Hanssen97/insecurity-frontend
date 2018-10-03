import React, {Component} from 'react';

import Button from '@material-ui/core/Button';

import './login.min.css';


class Login extends Component {
  constructor(props) {
    super(props);
    document.title = 'Login';
  }

  render() {
    return (
      <div className="Login">
        <h1> Fancy login </h1>

        <p> {this.props.session.info} </p>

        <Button onClick={this.props.fetchUser}>
          Login
        </Button>
      </div>
    )
  }
}

export default Login;
