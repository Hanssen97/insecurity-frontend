import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import LoginDialog from './components/LoginDialog';


import './index.min.css';



class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      showLogin: false,
    }

    this.getLocales();
  }

   componentDidMount() {
    let token       = localStorage.getItem("token");
    let {user}      = this.props.session;

    if (token && !user) {
      this.props.getUser();
    }
  }


  getLocales = () => {
    const { t } = this.props;
    this.texts = t('layout.main', {returnObjects: true});
  }


  render() {
    return (
      <div className="MainLayout">
          <AppBar position="fixed" className="AppBar">
            <Toolbar className="Toolbar">
              <div>
                <IconButton
                  className="MenuButton"
                  color="inherit"
                  aria-label="Menu"
                  onClick={() => this.setState({showSidebar: true})}
                >
                  <Icon> menu </Icon>
                </IconButton>
              </div>

              <div className="SearchBar">
                <SearchBar placeholder={this.texts.navbar.search}/>
              </div>

              <div className="User">
                <Button
                  color="inherit"
                  onClick={() => this.setState({showLogin: true})}
                >
                  {this.texts.navbar.login}
                </Button>
              </div>

            </Toolbar>

            <LoginDialog
                open={this.state.showLogin}
                onClose={() => this.setState({showLogin: false})}
            />

          </AppBar>

          <SideBar
            open={this.state.showSidebar}
            onClose={() => this.setState({showSidebar: false})}
          />

        <div className="MainLayout-Content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

MainLayout.contextTypes = {
   router: PropTypes.object,
}


export default translate('translations')(MainLayout);
