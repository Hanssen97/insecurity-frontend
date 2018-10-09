import React, {Component} from 'react';

import { translate } from 'react-i18next';

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

    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.session.register', {returnObjects: true});
  }

  checkLoggedIn = () => {
    if (this.props.session.user)  this.props.onLoggedIn();
  }

  componentDidMount() {
    this.checkLoggedIn();
  }
  componentDidUpdate() {
    this.getLocales();
    this.checkLoggedIn();
  }

  registerUser() {
    if (this.state.password === this.state.passwordRepeat) {
      this.props.register(this.state.username, this.state.email, this.state.password);
    } else {
      console.log("Passwords are not matching");
    }
  }


  render() {
    return (
      <div className="Register">
        <div className="Form">
          <div className="Fields">
            <div>
              <TextField
                label={this.texts.fields.username}
                margin="normal"
                variant="outlined"
                fullWidth
                value={this.state.username}
                onChange={e => {
                  this.setState({username: e.target.value})
                }}
              />
              <TextField
                label={this.texts.fields.email}
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
                label={this.texts.fields.password}
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
                label={this.texts.fields.repeatPassword}
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
              {this.texts.registerButton}
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
              <p>{this.texts.alreadyMember}</p>
              <p className="login" onClick={this.props.goToLogin}> {this.texts.login} </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default translate('translations')(Register);
