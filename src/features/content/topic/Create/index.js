import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
      description: "",
      category: "",
    }

    this.getLocales();
  }

  componentDidUpdate() {
    if (!this.props.session.user) {
      this.context.router.history.replace("/portal/login");
    }

    this.getLocales();
  }

  componentDidMount() {
    const fullPath = this.props.location.pathname;
    const id = fullPath.replace("/", '').replace("/new", "");
    this.setState({category: id});
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.content.topic.create', {returnObjects: true});
  }

  discardTopic = () => {
    if (window.confirm("Are you sure?")) {
      this.setState({title: "", description: ""});
      this.context.router.history.goBack();
    }
  }

  postTopic = () => {
    this.props.postTopic(
      this.state.category,
      this.state.title,
      this.state.description,
    );
  }

  handleRedirect = () => {
    if (this.props.content.createTopic.id !== "") {
      let path = this.props.content.createTopic.id;
      this.context.router.history.replace(path);
    }
  }

  render() {

    this.handleRedirect();


    return (
      <Paper className="CreateTopic">
        <Typography
          className="Title"
          variant='h5'
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
              variant='subtitle1'
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

CreateTopic.contextTypes = {
  router: PropTypes.object,
}

export default translate('translations')(CreateTopic);
