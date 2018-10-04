import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './index.min.css';


class Login extends Component {
  constructor(props) {
    super(props);
    document.title = 'Login';
  }


  gotoRegister = () => {
    this.props.history.replace('/auth/register');
  };

  render() {
    return (
      <div className="Login">
        <div className="Title">
          <img src="logo.png"/>
        </div>

        <div className="Form">
          <div className="Fields">
            <TextField
              label="Email"
              type="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              autoComplete="password"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="Submit">
            <Button
              onClick={this.props.fetchUser}
              size="large"
            >
              Login
            </Button>
            <p> Not a member?
              <a onClick={() => {
                this.props.history.replace('/member/register');
              }}> Register </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
