import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Img from 'react-image';
import Button from '@material-ui/core/Button';

import './index.min.css';


class SettingsView extends Component {
  constructor(props) {
    super(props);
    document.title = 'Search Page';
    this.state = {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    }
  }

  componentWillMount() {
      this.props.getCurrentSettings("morten");
      setTimeout(() => {
        console.log(this.props.user.currentSettings);
      }, 0);
  }

  render() {
    let {username, email, profilePicture} = this.props.user.currentSettings;
    return (
      <div className="container">
        <div className="imgContainer">
          <Img
            className="profileImg"
            src={profilePicture}
            loader={ <img className="profileImg" src="" alt="" /> } />
        </div>
        
        <Paper className="SettingsView">
          <div className="form">
            <h1 className="header">Settings</h1>

            <div className="inputContainer">
              <p>Change username</p>
              <TextField className="input" label={username} type="text" margin="normal" variant="outlined"
                value={this.state.username}
                onChange={e => {
                  this.setState({username: e.target.value})
                }}
              />
            </div>
            
            <div className="inputContainer">
              <p>Change email</p>
              <TextField className="input" label={email} type="email" autoComplete="email" margin="normal" variant="outlined"
                value={this.state.email}
                onChange={e => {
                  this.setState({email: e.target.value})
                }}
              />
            </div>
            
            <div className="inputContainer">
              <p>Change password</p>
              <TextField className="input" label="New password" type="password" margin="normal" variant="outlined"
                value={this.state.password}
                onChange={e => {
                  this.setState({password: e.target.value})
                }}
              />
            </div>
            
            <div className="inputContainer">
              <TextField className="input" label="Repeat password" type="password" margin="normal" variant="outlined"
                value={this.state.repeatPassword}
                onChange={e => {
                  this.setState({repeatPassword: e.target.value})
                }}
              />
            </div>
            
            <div className="buttons">
              <Button className="submit" size="large" onClick={this.props.fetchUser} >
                Submit Changes
              </Button>

              <Button className="discard" size="large" onClick={this.props.fetchUser} >
                Discard changes
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

export default SettingsView;
