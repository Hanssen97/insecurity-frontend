import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

import './index.min.css';


class PasswordPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmation: ''
    }
  }

  submit = () => {
    this.setState({
      password: '',
      confirmation: ''
    })
    this.props.onSubmit();
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
              value={this.state.confirmation}
              onChange={e => this.setState({confirmation: e.target.value})}
            />

          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button
              size="small"
              className="SaveAction"
              color="inherit"
              onClick={this.submit}
            >
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
    )
  }
}

export default PasswordPanel;
