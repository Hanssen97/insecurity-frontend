import React, {Component} from 'react';

import { translate } from 'react-i18next';

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

    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.content.topic.create', {returnObjects: true});
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
          {this.texts.title}
        </Typography>




        <Paper className="TitleInput">
          <input
            placeholder={this.texts.form.title}
            onChange={e => this.setState({
              title: e.target.value
            })}
          />
        </Paper>

        <textarea
          className="DescriptionInput"
          placeholder={this.texts.form.description}
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
              {this.texts.buttons.post}
            </Typography>
            <Icon fontSize='small' > send </Icon>
          </Button>

          <p> {this.texts.return.orGo}
            <b onClick={this.discardTopic}>
              {this.texts.return.back}
            </b>
          </p>
        </div>

      </Paper>
    )
  }
}

export default translate('translations')(CreateTopic);
