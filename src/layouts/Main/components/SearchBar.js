import React, { PureComponent } from 'react';
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
import { Redirect } from 'react-router-dom';
import Img from 'react-image'


import variables from '../../../common/styles.scss';

const styles = theme => ({
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  }
});



class SearchBar extends PureComponent {
  constructor(props, context) {
    super(props);
    this.state = {
      path: "",
      redirect: false,
    }
  }

  setRedirect = (path) => {
    this.setState({
      path: `/search/${path}`,
      redirect: true
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      window.location.reload()
      return <Redirect to={this.state.path} />
    }
  }

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Icon> search </Icon>
          </div>
          {this.renderRedirect()}
          <Input
            placeholder="Search…"
            disableUnderline
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onKeyPress={(e) => {
              if (e.key == 'Enter') {
                this.setRedirect(e.target.value);
              }
            }}
            />
        </div>
    );

  }
}

SearchBar.contextTypes = {
   router: PropTypes.object,
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SearchBar);
