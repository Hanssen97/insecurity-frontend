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
      password: ""
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
      <Paper className="SettingsView">

        <img src={profilePicture} alt=''/>

        <div className="Panels">
          <TextPanel
            title="Username"
            description="Change the account username"
            placeholder={username}
            onSubmit={value => this.setState({username: value})}
            />
          <TextPanel
            title="Email"
            description="Change the account email"
            placeholder={email}
            onSubmit={value => this.setState({email: value})}
            />
          <PasswordPanel
            title="Password"
            description="Change the account password"
            onSubmit={value => this.setState({password: value})}
            />
        </div>


      </Paper>
    )
  }
}

export default SettingsView;
