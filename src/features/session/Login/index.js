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
      username: "",
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
                label="username"
                type="email"
                margin="normal"
                variant="outlined"
                fullWidth
                value={this.state.username}
                onChange={e => {
                  this.setState({username: e.target.value})
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
              onClick={() => this.props.login(this.state.username, this.state.password)}
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


            <div className="footer"> 
              <p>Not a member?</p>
              <p className="register" onClick={() => {this.context.router.history.push('/member/register')}}> Register </p>
            </div>

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
