import React, {Component} from 'react';

import { translate } from 'react-i18next';

import Paper from '@material-ui/core/Paper';

import TextPanel from '../components/TextPanel';
import PasswordPanel from '../components/PasswordPanel';
import LanguagePanel from '../components/LanguagePanel';


import './index.min.css';


class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      profilePicture: "",
    }

    this.props.getSettings();
    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.user.settings', {returnObjects: true});
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

  changeLanguage = (language) => {
    this.props.changeLanguage(language);
  }

  render() {
    const {username, email, profilePicture, settings} = this.props.user.user;
    
    return (
      <Paper className="SettingsView">

        <img src="media/authBackground_low.jpg" alt=''/>

        <div className="Panels">

          <TextPanel
            title={this.texts.email.title}
            description={this.texts.email.description}
            placeholder={email}
            saveText={this.texts.save}
            onSubmit={value => this.changeEmail(value)}
            />

          <PasswordPanel
            title={this.texts.password.title}
            description={this.texts.password.description}
            saveText={this.texts.save}
            onSubmit={(pwd1, pwd2) => this.changePassword(pwd1, pwd2)}
            />

            <LanguagePanel
              title="Language"
              description="Change the language for this account"
              saveText={this.texts.save}
              onSubmit={(language) => this.changeLanguage(language)}
            />

        </div>


      </Paper>
    )
  }
}



export default translate('translations')(SettingsView);
