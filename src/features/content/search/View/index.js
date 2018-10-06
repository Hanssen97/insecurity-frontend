import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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
  }

  componentWillMount() {
    this.getSearchQuery();
  }

  componentWillReceiveProps(newProps) {
    if(newProps.location.pathname != this.state.fullPath) {
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
        <h1 className="header">Search results for "{query}"</h1>
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

export default SearchView;
