import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';

import ListItem from '../components/ListItem';

import './index.min.css';


class SideBar extends PureComponent {
  constructor(props) {
    super(props);

    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('layout.main', {returnObjects: true});
  }

  render() {
    const sideList = (
      <div className="Sidebar">

        <div className="Title">
          <img alt='' src="logo.png"/>
        </div>


        <List>

          <ListItem
            icon='home'
            title={this.texts.sidebar.home}
            link='/'
            onClick={e => this.context.router.history.push(e.currentTarget.id)}
          />


        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader component="div" className='Subheader'>
              Favorites
            </ListSubheader>
          }
        >


          <ListItem
            title="Music"
            link='/Music'
            onClick={e => this.context.router.history.push(e.currentTarget.id)}
          />

          <ListItem
            title="Programming Humor"
            link='/Programming Humor'
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

export default translate('translations')(SideBar);
