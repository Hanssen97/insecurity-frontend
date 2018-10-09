import React, {Component} from 'react';

import { translate } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


// Components
import CategoryPreview from '../../category/components/CategoryPreview/index';
import TopicPreview from '../../topic/components/TopicPreview/index';

import './index.min.css';


class SearchView extends Component {
  constructor(props) {
    super(props);
    document.title = 'Search Page';
    this.state = {
      query: "",
      fullPath: "",
    }

    this.getLocales();
  }

  getLocales = () => {
    const { t } = this.props;
    this.texts = t('feature.content.search', {returnObjects: true});
  }

  componentDidMount() {
    this.getSearchQuery();
  }

  componentDidUpdate() {
    this.getLocales();
    if(this.props.location.pathname !== this.state.fullPath) {
      this.getSearchQuery();
    }
  }

  getSearchQuery() {
    const fullPath = this.props.location.pathname;
    const query = fullPath.replace("/search/", "");

    this.props.getSearchResult(query);
    this.setState({
      query,
      fullPath,
    });
  }


  render() {

    if (this.props.feedback.fetching) {
      return (
        <div className="Progress">
          <CircularProgress color="inherit"/>
        </div>
      )
    }



    let {searchResult, query} = this.props.content;

    let categories = searchResult.categories.map((category, key) => {
      return (
        <CategoryPreview key={key}
            name={category.name}
            description={category.description}
            onClick={() => this.props.history.push(`/${category.name}`)}
          />
      );
    });

    let topics = searchResult.topics.map((topic, key) => {
      return (
        <TopicPreview key={key}
            owner={topic.owner}
            title={topic.title}
            description={topic.description}
            date={topic.date}
            likes={topic.likes}
            onClick={() => this.props.history.push(`/${topic.category}/${topic.title}`)}
          />
      );
    });

    let categoryTitle;
    if (categories.length > 0) {
      categoryTitle = (
        <Typography
          className="seperator"
          variant="headline"
          >
          Categories
        </Typography>
      );
    }

    let topicTitle;
    if (topics.length > 0) {
      topicTitle = (
        <Typography
          className="seperator"
          variant="headline"
          >
          Topics
        </Typography>
      );
    }

    return (
      <div className="container">
        <h1 className="header">{this.texts.title} "{query}"</h1>
        <Paper className="SearchView">
          {topicTitle}
          {topics}
          {categoryTitle}
          {categories}
        </Paper>
      </div>
    )
  }
}

export default translate('translations')(SearchView);
