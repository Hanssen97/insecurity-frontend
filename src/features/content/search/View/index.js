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
    
    let categories = searchResult.category.edges.map((category, key) => {
      return (
        <CategoryPreview key={key}
            name={category.node.name}
            description={category.node.description}
            onClick={() => this.props.history.push(`/${category.node.id}`)}
          />
      );
    });

    const valid = (item) => {
      if (item !== null || item !== 'undefined') return item;
      return "";
    }

    let topics = searchResult.topic.edges.map((topic, key) => {
      const {owner, body, date, likes, category, title, id} = topic.node;
      console.log(topic.node);
      console.log(topic.node)
      return (
        <TopicPreview key={key}
            owner={(owner) ? owner.username: ""}
            title={title}
            description={body}
            date={date}
            likes={likes}
            onClick={() => (category.id === "[�,mƭ91") ? this.props.history.push(`/${category.id}/${id}`) : this.props.history.push("/")}
          />
      );
    });

    let categoryTitle;
    if (categories.length > 0) {
      categoryTitle = (
        <Typography
          className="seperator"
          variant="h5"
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
          variant="h5"
          >
          Topics
        </Typography>
      );
    }

    return (
      <div className="container">
        <h1 className="header">{this.texts.title} "{this.state.query}"</h1>
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
