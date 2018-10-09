import React, {Component} from 'react';

import { translate } from 'react-i18next';

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
    this.getLocales();
  }

  componentDidUpdate() {
    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.content.home', {returnObjects: true});
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
                  variant='h5'
                  onClick={() => {
                    this.props.history.push('/'+category.node.id);
                  }}
                >
                  {category.node.name}
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
          <Typography variant='h4'> {this.texts.title} </Typography>
        </div>

        <Paper className="Categories">
          {content}
        </Paper>
      </div>
    )
  }
}

export default translate('translations')(Home);
