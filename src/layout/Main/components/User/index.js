import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItem from '../components/ListItem';

import './index.min.css';



class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { user }      = this.props;
    const { anchorEl }  = this.state;

    return (
      <div className="User">
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.openMenu}
        >
          <img
            className="Avatar"
            alt=''
            src="media/authBackground_low.jpg"
          />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.closeMenu}
        >
          <ListItem
            icon='settings'
            title="Settings"
            link='/settings'
            onClick={e => {
              this.context.router.history.push(e.currentTarget.id)
              this.closeMenu();
            }}
          />
          <ListItem
            icon='exit_to_app'
            title="Logout"
            onClick={() => {
              this.props.onLogout();
              this.closeMenu();
            }}
          />
        </Menu>
      </div>
    );
  }
}

User.contextTypes = {
   router: PropTypes.object,
}


export default User;
