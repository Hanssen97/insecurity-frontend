import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Icon from '@material-ui/core/Icon';

import Img from 'react-image'

import SearchBar from './components/SearchBar';


import './index.min.css';



class MainLayout extends Component {
  constructor(props, context) {
    super(props);
  }


  render() {
    return (
      <div className="MainLayout">
          <AppBar position="fixed" className="AppBar">
            <Toolbar className="Toolbar">
              <div>
                <IconButton className="MenuButton" color="inherit" aria-label="Menu">
                  <Icon> menu </Icon>
                </IconButton>
              </div>

              <div className="SearchBar">
                <SearchBar/>
              </div>

              <div className="User">
                <Button color="inherit">Login</Button>
              </div>

            </Toolbar>
          </AppBar>

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


export default MainLayout;
