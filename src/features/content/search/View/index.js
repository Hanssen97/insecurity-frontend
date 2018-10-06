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
          />
      );
    });

    return (
      <div className="container">

        <h1 className="header">Search results for "{query}"</h1>

        <Paper className="SearchView">

          <Typography
              className="seperator"
              variant="headline"
              >
              Topics
            </Typography>

          {topics}

          <Typography
            className="seperator"
            variant="headline"
            >
            Categories
          </Typography>

          {categories}

        </Paper>
      </div>
    )
  }
}

export default SearchView;
