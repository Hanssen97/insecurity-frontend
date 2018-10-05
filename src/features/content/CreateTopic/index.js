import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
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
  

  componentWillReceiveProps(props) {
    // Redirect to redirect url
    console.log("Redirect to: " + props.content.redirect);
  }


  render() {
    const clientHeight = document.documentElement.clientHeight;
    return (
      <div className="CreateTopic">
        <div className="container">
          <h1>NEW TOPIC</h1>
          <div className="form">
            <TextField
              className="inputTitle"
              label="Topic title..."
              type="text" 
              margin="normal"
              variant="outlined"
              fullWidth 
              value={this.state.title}
              onChange={(e) => this.setState({title: e.target.value})}/>

            <TextField
              className="inputTopicText"
              label="Write a description"
              margin="normal"
              variant="outlined"
              multiline={true}
              rows={clientHeight / 45}
              rowsMax={clientHeight / 45}
              fullWidth 
              value={this.state.description}
              onChange={(e) => this.setState({description: e.target.value})} />

            <div className="buttons">
              <Button
                className="postBtn"
                onClick={this.postTopic}
                size="large"
                > POST </Button>

              <Button
                className="discardBtn"
                onClick={this.discardTopic}
                size="large"
                > DISCARD </Button>
            </div>
            
          </div>

        </div>

      </div>
    )
  }
}

export default CreateTopic;
