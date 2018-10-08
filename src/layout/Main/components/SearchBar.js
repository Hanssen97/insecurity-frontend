import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Icon from '@material-ui/core/Icon';


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

  handleRedirect = (e) => {
    let query = e.target.value.replace(/[/]/g, ' ');
    if (e.key === 'Enter') {
      if (query.trim() == "") return;

      this.setState({
        path: `/search/${query}`,
        redirect: true
      });

      e.target.value = "";
    }
  }

  renderRedirect = () => {
    let path = this.state.path;
    if (this.state.redirect) {
      this.context.router.history.push(path);
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
            placeholder={this.props.placeholder}
            disableUnderline
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onKeyPress={(e) => this.handleRedirect(e)}
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
