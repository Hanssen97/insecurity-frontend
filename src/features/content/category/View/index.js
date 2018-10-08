import React, {Component} from 'react';

import TopicPreview from '../../topic/components/TopicPreview';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import './index.min.css';


class CategoryView extends Component {
  constructor(props) {
    super(props);
    document.title = 'Category Page';
    this.state = {
      name: "",
      id: "",
    }
  }

  componentDidMount() {
    this.getCategoryId();
  }

  componentDidUpdate() {
    if(this.props.location.pathname !== this.state.fullPath) {
      this.getCategoryId();
    }
  }

  getCategoryId() {
    const fullPath = this.props.location.pathname;
    const id = fullPath.replace(/[/]/g, '');
    this.props.getCategory(id);

    this.setState({
      id,
      fullPath,
    });
  }



  render() {
    let view = null;
    let {content, feedback} = this.props;

    if (feedback.fetching && content.category.topics.length === 0) {
      view = (
        <div className="Progress">
          <CircularProgress color="inherit"/>
        </div>
      )
    } else {
      view = content.category.topics.map((topic, key) => {
        return (
          <TopicPreview key={key}
            owner={topic.owner.username}
            date={topic.timestamp}
            title={topic.title}
            description={topic.description}
            likes={topic.likes}
            category={this.state.name}
            onClick={() => this.props.history.push(`/${this.state.id}/${topic.title}`)}
          />
        )
      })
    }
    return (
      <Paper className="CategoryView">
          <h1 className="catTitle">{content.category.name}</h1>
          <div className="topics">
            {view}
          </div>
      </Paper>
    )
  }
}

export default CategoryView;
