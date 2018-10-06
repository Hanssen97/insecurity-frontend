import React, {Component} from 'react';
import TopicPreview from '../../topic/components/TopicPreview';
import Paper from '@material-ui/core/Paper';

import './index.min.css';


class CategoryView extends Component {
  constructor(props) {
    super(props);
    document.title = 'Category Page';
    this.state = {
      name: "",
    }
  }

  componentWillMount() {
    this.setState({name: this.props.location.pathname.replace("/", "")});
    this.props.getCategory(this.state.name);
  }

  render() {
    let topics = this.props.content.topics;
    topics = topics.map((topic, key) => {
      return (
        <TopicPreview key={key}
              owner={topic.owner}
              date={topic.date}
              title={topic.title}
              description={topic.description}
              likes={topic.likes}
            />
      )
    })
    return (
      <Paper className="CategoryView">
          <h1 className="catTitle">{this.state.name}</h1>
          <div className="topics">
            {topics}
          </div>
      </Paper>
    )
  }
}

export default CategoryView;
