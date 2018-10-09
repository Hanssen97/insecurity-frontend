import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

import './index.min.css';


class LanguagePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
    }
  }

  submit = () => {
    this.props.onSubmit(this.state.language);
    this.setState({
      open: false,
    })
  }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

  render() {
    return (
        <ExpansionPanel className='LanguagePanel'>
          <ExpansionPanelSummary expandIcon={<Icon> expand_more </Icon>}>
            <div className="Heading">
              <Typography className="Title">{this.props.title}</Typography>
              <Typography className="Description">{this.props.description}</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="expansionPanel">

            <InputLabel htmlFor="language">Langage</InputLabel>
            <Select className="select"
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.state.language}
                onChange={this.handleChange}
                inputProps={{
                    name: 'language',
                    id: 'language',
                }}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>

                <MenuItem value="en">English</MenuItem>
                <MenuItem value="no">Norwegian</MenuItem>
            </Select>


          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button
              size="small"
              className="SaveAction"
              color="inherit"
              onClick={this.submit}
            >
              {this.props.saveText}
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
    )
  }
}

export default LanguagePanel;
