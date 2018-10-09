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




  changeEmail = (email, password) => {
    this.props.changeEmail(email);
  }

  changePassword = (newPassword, password) => {
    // do action
  }

  changeLanguage = language => {
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
            onSubmit={(value, password) => this.changeEmail(value, password)}
            />

          <PasswordPanel
            title={this.texts.password.title}
            description={this.texts.password.description}
            saveText={this.texts.save}
            onSubmit={(newPassword, password) => this.changePassword(newPassword, password)}
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
