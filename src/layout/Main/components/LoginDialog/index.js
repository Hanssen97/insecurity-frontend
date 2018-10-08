import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import Session from '../../../../features/session/index';

import './index.min.css';

let {Login} = Session;


class LoginDialog extends Component {
  render() {
    if (!this.props.open) return null;
    return (
      <Dialog
        className="LoginDialog"
       fullScreen={this.props.fullScreen}
       open={this.props.open}
       onClose={this.props.onClose}
       aria-labelledby="responsive-dialog-title"
      >
       <DialogContent className="Content">
         <Login 
            onLoggedIn={this.props.onClose}
            goToRegister={() => {
              this.context.router.history.replace("/portal/register");
            }}
          />
       </DialogContent>
      </Dialog>
    );
  }
}

LoginDialog.contextTypes = {
  router: PropTypes.object,
}
LoginDialog.propTypes = {
   fullScreen: PropTypes.bool.isRequired,
}


export default withMobileDialog()(LoginDialog);
