import React, {PureComponent} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';


import './index.min.css';


class LanguagePanel extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
    }
  }

  onCancel = () => {
    this.props.onCancel();
    this.setState({ password: "" })
  }
  onConfirm = () => {
    this.props.onConfirm(this.state.password);
    this.setState({ password: "" })
  }

  render() {
    return (
      <Dialog
          className="ConfirmDialog"
          open={this.props.open}
          onClose={this.props.onCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"> Confirm with password </DialogTitle>
          <DialogContent>
            <Input
              type="password"
              fullWidth
              placeholder="password"
              disableUnderline
              onChange={(e) => this.setState({password: e.target.value})}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCancel} className="CancelAction">
              Cancel
            </Button>
            <Button onClick={this.onConfirm} className="SaveAction" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
    )
  }
}

export default LanguagePanel;
