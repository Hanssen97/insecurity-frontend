import React, {Component} from 'react';

import { translate } from 'react-i18next';

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

    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.session.login', {returnObjects: true});
  }

  checkLoggedIn = () => {
    if (this.props.session.user)  this.props.onLoggedIn();
  }


  componentDidMount() {
    this.checkLoggedIn();
  }
  componentDidUpdate() {
    this.checkLoggedIn();
  }


  render() {
    return (
      <div className="Login">
        <div className="Form">
          <div className="Fields">
            <div>
              <TextField
                label={this.texts.fields.username}
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
            </div>
          </div>

          <div className="Submit">
            <Button
              onClick={() => this.props.login(this.state.username, this.state.password)}
              size="large"
            >
              {this.texts.loginButton}
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
              <p>{this.texts.notAMember}</p>
              <p className="register" onClick={this.props.goToRegister}> {this.texts.register} </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default translate('translations')(Login);
