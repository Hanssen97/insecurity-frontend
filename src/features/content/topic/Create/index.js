import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import './index.min.css';


class CreateTopic extends Component {
  constructor(props) {
    super(props);
    document.title = 'Create Topic';
    this.state = {
      title: "",
      description: ""
    }
  }

  discardTopic = () => {
    if (window.confirm("Are you sure?")) {
      this.setState({title: "", description: ""});
    }
  }

  postTopic = () => {
    this.props.postTopic({
      title: this.state.title,
      description: this.state.description
    });
  }

  render() {
    return (
      <Paper className="CreateTopic">
        <Typography
          className="Title"
          variant='headline'
          color='inherit'
          >
          NEW TOPIC
        </Typography>




        <Paper className="TitleInput">
          <input
            placeholder="Title..." onChange={e => this.setState({
              title: e.target.value
            })}
          />
        </Paper>

        <textarea
          className="DescriptionInput"
          placeholder="Description..."
          onChange={e => this.setState({
            description: e.target.value
          })}
        />

        <div className="PostTopic">
          <Button
            className="Button"
            variant="contained"
            onClick={this.postTopic}
          >
            <Typography
              variant='subheading'
              color='inherit'
            >
              POST
            </Typography>
            <Icon fontSize='small' > send </Icon>
          </Button>

          <p>
            or go <b onClick={this.discardTopic}>back</b>
          </p>
        </div>

      </Paper>
    )
  }
}

export default CreateTopic;
