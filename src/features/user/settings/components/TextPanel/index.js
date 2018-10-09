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


class TextPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      confirm: false
    }
  }

  submit = password => {
    this.setState({
      text: '',
      confirm: false,
    })

    this.props.onSubmit(this.state.text, password);
  }



  validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      return false;
    } 
    return true;
  }

  render() {
    return (
        <ExpansionPanel
          className='TextPanel'
        >
          <ExpansionPanelSummary expandIcon={<Icon> expand_more </Icon>}>
            <div className="Heading">
              <Typography className="Title">{this.props.title}</Typography>
              <Typography className="Description">{this.props.description}</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

            <Input
              type={this.props.type}
              fullWidth
              placeholder={this.props.placeholder}
              disableUnderline
              value={this.state.text}
              onChange={(e) => this.setState({text: e.target.value})}
            />

          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button
              size="small"
              className="SaveAction"
              color="inherit"
              onClick={() => {
                if (this.validateEmail(this.state.text)) {
                  this.setState({
                    confirm: true
                  })
                } else {
                  alert("Invalid email")
                }
              }}
            >
              {this.props.saveText}
            </Button>
          </ExpansionPanelActions>

          <ConfirmDialog
            open={this.state.confirm}
            onConfirm={this.submit}
            onCancel={() => this.setState({
              confirm: false
            })}
          />

        </ExpansionPanel>
    )
  }
}

export default TextPanel;
