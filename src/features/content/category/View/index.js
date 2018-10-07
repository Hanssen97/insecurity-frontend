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
  
  componentDidMount() {
    this.getCategoryName();
  }

  componentDidUpdate() {
    if(this.props.location.pathname != this.state.fullPath) {
      this.getCategoryName();
    }
  }
  
  getCategoryName() {
    const fullPath = this.props.location.pathname;
    const name = fullPath.replace(/[/]/g, ' ');

    this.props.getCategory(name);
    this.setState({
      name,
      fullPath,
    });
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
                category={this.state.name}
                onClick={() => this.props.history.push(`/${topic.category}/${topic.title}`)}
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
