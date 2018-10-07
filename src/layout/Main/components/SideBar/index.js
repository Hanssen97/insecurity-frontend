import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';

import ListItem from './components/ListItem';

const styles = {
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  subheader: {
    marginLeft: '-8px'
  }
};

class SideBar extends PureComponent {
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>


          <ListItem
            icon='home'
            title='Home'
            link='/'
            onClick={e => this.context.router.history.push(e.currentTarget.id)}
          />


        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader component="div" className={classes.subheader}>
              Favorites
            </ListSubheader>
          }
        >


          <ListItem
            title="Music"
            link='/Music'
            onClick={e => this.context.router.history.push(e.currentTarget.id)}
          />


        </List>

      </div>
    );

    return (
      <div>
        <Drawer
          open={this.props.open}
          onClose={this.props.onClose}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.onClose}
            onKeyDown={this.props.onClose}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

SideBar.contextTypes = {
   router: PropTypes.object,
}
SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
