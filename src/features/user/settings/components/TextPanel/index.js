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

import './index.min.css';


class TextPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  submit = () => {
    this.props.onSubmit(this.state.text);
    this.setState({
      text: ''
    })
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
              onClick={this.submit}
            >
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
    )
  }
}

export default TextPanel;
