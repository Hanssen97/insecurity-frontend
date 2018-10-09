import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

import ConfirmDialog from '../ConfirmDialog';

import './index.min.css';


class PasswordPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      repeatPassword: '',
      confirm: false,
    }
  }

  submit = password => {
    if (this.state.password === this.state.repeatPassword) {
      this.props.onSubmit(this.state.text, password);
      this.setState({
        password: '',
        repeatPassword: '',
        confirm: false,
      })
    } else {
      this.setState({ confirm: false })
    }
  }

  render() {
    return (
        <ExpansionPanel className='PasswordPanel'>
          <ExpansionPanelSummary expandIcon={<Icon> expand_more </Icon>}>
            <div className="Heading">
              <Typography className="Title">{this.props.title}</Typography>
              <Typography className="Description">{this.props.description}</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

            <Input
              className="Password"
              fullWidth
              type="password"
              placeholder="New password"
              disableUnderline
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})}
            />

            <Input
              className="RepeatPassword"
              fullWidth
              type="password"
              placeholder="Repeat password"
              disableUnderline
              value={this.state.repeatPassword}
              onChange={e => this.setState({repeatPassword: e.target.value})}
            />

          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button
              size="small"
              className="SaveAction"
              color="inherit"
              onClick={() => this.setState({
                confirm: true
              })}
            >
              {this.props.saveText}
            </Button>
          </ExpansionPanelActions>

          <ConfirmDialog
            open={this.state.confirm}
            onConfirm={this.submit}
            onCancel={() => this.setState({ confirm: false })}
          />

        </ExpansionPanel>
    )
  }
}

export default PasswordPanel;
