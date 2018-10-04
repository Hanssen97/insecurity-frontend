import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './index.min.css';


class Register extends Component {
  constructor(props) {
    super(props);
    document.title = 'Register';
  }


  gotoRegister = () => {
    this.props.history.replace('/auth/register');
  };

  render() {
    return (
      <div className="Register">
        <div className="Title">
          <img src="logo.png"/>
        </div>

        <div className="Form">
          <div className="Fields">
            <div>
              <TextField
                label="Username"
                margin="normal"
                variant="outlined"
                fullWidth
              />
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
              <TextField
                label="Repeat Password"
                type="password"
                autoComplete="password"
                margin="none"
                variant="outlined"
                fullWidth
              />
            </div>
          </div>

          <div className="Submit">
            <Button
              onClick={this.props.fetchUser}
              size="large"
            >
              Register
            </Button>
            <p> Already a member?
              <a onClick={() => {
                this.props.history.replace('/member/login');
              }}> Log in </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
