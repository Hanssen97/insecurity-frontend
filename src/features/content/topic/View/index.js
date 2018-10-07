import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import OwnerHeader from '../components/OwnerHeader';
import Reply from '../components/Reply';

import './index.min.css';


class Topic extends Component {
  constructor(props) {
    super(props);
    document.title = 'Topic Page';
    this.state = {

    }
  }


  componentWillMount() {
    this.props.getTopic("22");
  }

  render() {
    let topic = this.props.content.topic;
    let comments = topic.replies.map((reply, key) => {
      return (
        <Reply
          key={key}
          owner={reply.owner}
          likes={reply.likes}
          text={reply.text}
          date={reply.date}
        />
      );
    });

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
            {topic.description}
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
