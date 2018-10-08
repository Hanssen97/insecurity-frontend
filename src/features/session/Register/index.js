import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import './index.min.css';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordRepeat: ""
    }
    document.title = 'Register';
  }


  render() {
    return (
      <div className="Register">
        <div className="Form">
          <div className="Fields">
            <div>
              <TextField
                label="Username"
                margin="normal"
                variant="outlined"
                fullWidth
                value={this.state.username}
                onChange={e => {
                  this.setState({username: e.target.value})
                }}
              />
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
              <TextField
                label="Repeat Password"
                type="password"
                autoComplete="password"
                margin="none"
                variant="outlined"
                fullWidth
                value={this.state.passwordRepeat}
                onChange={e => {
                  this.setState({passwordRepeat: e.target.value})
                }}
              />
            </div>
          </div>

          <div className="Submit">
            <Button
              onClick={() => this.props.register(this.state.username, this.state.email, this.state.password)}
              size="large"
            >
              Register
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
              <p>Already a member?</p>
              <p className="login" onClick={() => { 
                this.props.history.push('/member/login');
              }}> Log in </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Register;
