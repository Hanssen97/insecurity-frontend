import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import './index.min.css';


class CreateTopic extends Component {
  constructor(props) {
    super(props);
    document.title = 'CreateTopic';
  }


  render() {
    return (
      <div className="CreateTopic">
        <div className="container">
          <h1>NEW TOPIC</h1>
          <div className="form">
            <TextField
              label="Topic title..."
              type="text"
              margin="normal"
              variant="outlined"
              fullWidth
              />
            <TextField
              label="Write a description"
              margin="normal"
              variant="outlined"
              multiline={true}
              rows={10}
              rowsMax={15}
              fullWidth
            />
          </div>

        </div>


      </div>
    )
  }
}

export default CreateTopic;
