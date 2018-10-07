import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Typography from '@material-ui/core/Typography';

import Session from '../../../../features/session/index';

import './index.min.css';

let {Login, Register} = Session;


class LoginDialog extends Component {
  render() {
    return (
      <Dialog
        className="LoginDialog"
       fullScreen={this.props.fullScreen}
       open={this.props.open}
       onClose={this.props.onClose}
       aria-labelledby="responsive-dialog-title"
      >
       <DialogContent className="Content">
         <Login />
       </DialogContent>
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
   fullScreen: PropTypes.bool.isRequired,
}


export default withMobileDialog()(LoginDialog);
