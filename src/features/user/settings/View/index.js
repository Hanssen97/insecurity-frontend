import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

    document.title = "Settings"

    this.props.getSettings();
  }


  componentDidUpdate() {
    if (!this.props.session.user) {
      this.context.router.history.replace("/");
    }
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.user.settings', {returnObjects: true});
  }

  changeEmail = (email, password) => {
    this.props.changeEmail(email, password);
  }

  changePassword = (password, newPassword) => {
    this.props.changePassword(password, newPassword);
  }

  changeLanguage = (language) => {
    this.props.changeLanguage(language);

    this.props.i18n.changeLanguage(language, (err, t) => {
      if (err) return console.error('Error when changing language:', err);
    });
  }




  render() {
    this.getLocales();

    const { username, email, profilePicture, settings} = this.props.user.user;

    return (
      <Paper className="SettingsView">

        <img src="media/User.jpg" alt={profilePicture}/>

        <div className="username">{username}</div>

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
            onSubmit={(newPassword, password) => this.changePassword(password, newPassword)}
            />

          <LanguagePanel
            title="Language"
            description="Change the language for this account"
            current={settings.language}
            saveText={this.texts.save}
            onSubmit={(language) => this.changeLanguage(language)}
          />

        </div>


      </Paper>
    )
  }
}


SettingsView.contextTypes = {
  router: PropTypes.object,
}


export default translate('translations')(SettingsView);
