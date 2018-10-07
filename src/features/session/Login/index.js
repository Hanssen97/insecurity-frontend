import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import './index.min.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    document.title = 'Login';
  }


  render() {
    return (
      <div className="Login">
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
                value={this.state.email}
                onChange={e => {
                  this.setState({email: e.target.value})
                }}
                />
              <TextField
                label="Password"
                type="password"
                autoComplete="password"
                margin="normal"
                variant="outlined"
                fullWidth
                value={this.state.password}
                onChange={e => {
                  this.setState({password: e.target.value})
                }}
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
                this.context.router.history.push('/member/register');
              }}> Register </a>
            </p>

          </div>
        </div>
      </div>
    )
  }
}

Login.contextTypes = {
   router: PropTypes.object,
}

export default Login;
