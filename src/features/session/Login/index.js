import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

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
          <img alt='' src="logo.png"/>
        </div>

        <div className="Form">
          <div className="Fields">
            <div>
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
          </div>

          <div className="Submit">
            <Button
              onClick={this.props.fetchUser}
              size="large"
            >
              Login
            </Button>

            <div>
              {
                this.props.feedback.fetching && (
                  <CircularProgress
                    className="spinner"
                    size={30}
                  />
                )
              }
            </div>


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
