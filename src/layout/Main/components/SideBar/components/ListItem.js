import React from 'react';

import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function ListItem(props) {
  return (
    <MenuItem
      id={props.link}
      onClick={props.onClick}
    >


      <ListItemIcon>
        <Icon> {props.icon} </Icon>
      </ListItemIcon>

      <ListItemText
        primaryTypographyProps={{noWrap: true}}
      >
        {props.title}
      </ListItemText>


    </MenuItem>
  );
}

export default ListItem;
