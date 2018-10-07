import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import './index.min.css';


class Home extends Component {
  constructor(props) {
    super(props);
    document.title = 'Home Page';

    this.props.getCategories();
  }

  render() {
    let content;

    if (this.props.feedback.fetching && this.props.content.categories.length === 0) {
      content = <CircularProgress className="Progress" />
    } else {
      content = (
        <Grid container className="CategoryList">
          {
            this.props.content.categories.map((category, i) => (
              <Grid key={i} item>
                <Typography
                  className="Item"
                  variant='title'
                  onClick={() => {
                    this.props.history.push('/'+category.title);
                  }}
                >
                  {category.title}
                </Typography>
              </Grid>
            ))
          }
        </Grid>
      )
    }

    return (
      <div className="Home">
        <div className="Header">
          <img src="media/teacup.gif" alt="" />
          <Typography variant='display1'> What's your cup of tea? </Typography>
        </div>

        <Paper className="Categories">
          {content}
        </Paper>
      </div>
    )
  }
}

export default Home;
