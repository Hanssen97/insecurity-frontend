import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import OwnerHeader from '../components/OwnerHeader';
import Reply from '../components/Reply';

import './index.min.css';


class Topic extends Component {
  constructor(props) {
    super(props);
    document.title = 'Topic Page';
    this.state = {
      id: "",
    }
  }

  componentDidMount() {
    const fullPath = this.props.location.pathname;
    const id = fullPath.replace(/ *\/[^)]*\/ */g, '');
    this.props.getTopic(id);

    this.setState({
      id,
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

    let topic = this.props.content.topic;
    let comments;
    // let comments = topic.comments.map((reply, key) => {
    //   return (
    //     <Reply
    //       key={key}
    //       owner={reply.owner}
    //       likes={reply.likes}
    //       text={reply.text}
    //       date={reply.date}
    //     />
    //   );
    // });

    return (
      <Paper className="Topic">
        <div className="Post">
          <div className="Header">
            <Typography
              className="Title"
              variant="headline"
            >
              {topic.title}
            </Typography>

            <OwnerHeader
              type='post'
              owner='Morten'
              image='https://www.stickytiger.co.uk/user/products/U0026_Large_1_Inch_Circle_Punch.jpg'
              date='20.03.2018'
            />
          </div>

          <Typography
            className="Description"
            variant="body1"
          >
            {topic.body}
          </Typography>
        </div>


        <div className="Replies">
          {comments}
        </div>
      </Paper>
    )
  }
}

export default Topic;
