import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import './index.min.css';


class Home extends Component {
  constructor(props) {
    super(props);
    document.title = 'Home Page';
  }
  render() {
    return (
      <div className="Home">
        <div className="Header">
          <img src='media/teacup.gif' />
          <Typography variant='display1'> What's your cup of tea? </Typography>
        </div>

        <Paper className="Categories">

        </Paper>
      </div>
    )
  }
}

export default Home;
