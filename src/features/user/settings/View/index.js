import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';

import TextPanel from '../components/TextPanel';
import PasswordPanel from '../components/PasswordPanel';


import './index.min.css';


class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      profilePicture: "",
    }

    this.props.getSettings("morten");
  }


  changeUsername = (name) => {
    this.props.changeUsername(name);
  }

  changeEmail = (email) => {
    this.props.changeEmail(email);
  }

  changePassword = (pwd1, pwd2) => {
    if (pwd1 === pwd2) {
      this.props.changePassword(pwd1);
    } else {
      alert("Passwords doesnt match");
    }
  }

  render() {
    const {username, email, profilePicture} = this.props.user.settings;
    console.log(this.props.user.settings)
    return (
      <Paper className="SettingsView">

        <img src={profilePicture} alt=''/>

        <div className="Panels">
          <TextPanel
            title="Username"
            description="Change the account username"
            placeholder={username}
            onSubmit={value => this.changeUsername(value)}
            />
          <TextPanel
            title="Email"
            description="Change the account email"
            placeholder={email}
            onSubmit={value => this.changeEmail(value)}
            />
          <PasswordPanel
            title="Password"
            description="Change the account password"
            onSubmit={(pwd1, pwd2) => this.changePassword(pwd1, pwd2)}
            />
        </div>


      </Paper>
    )
  }
}

export default SettingsView;
